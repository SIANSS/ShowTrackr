var mongoose = require('mongoose');
const TVDB = require('node-tvdb');
var http = require('http');
var request = require('request');
var Show = require('../models/show');
var xml2js = require('xml2js');

var Show = require('../models/show');
module.exports = (app, passport) =>{


  app.get('/', (req, res)=>{
    res.render('index', { user : req.user});
  })

  app.get('/desc/:id', (req, res)=>{
    const tvdb = new TVDB('0YTLHQL6Q63URBKV');
    tvdb.getSeriesById(req.params.id).then((response, body) => {
      res.render('desc', {data : response, user : req.user});
    }).catch(error => { throw error });
  });

  // app.get('/desc', (req, res)=>{
  //   res.render('desc', {data : req.response});
  // });

  app.get('/login', (req, res)=>{
    res.render('login');
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.get('/signup', (req, res)=>{
    res.render('signup');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.get('/desc', (req, res)=>{
    res.render('description');
  });


  app.put('/desc/subscribe/:id', (req, res)=>{
    var name = req.body.name;
    var firstAired = req.body.banner;
    var network = req.body.network;
    var overview = req.body.overview;
    var status = req.body.status;
    var subid = req.body.subid;

    var newShow = new Show();
    // console.log(newShow.tree);

    Show.findOne({'name' : name}, (err, result)=>{
      if(err) throw err;
      if(!result){
        newShow.name = name;
        newShow.firstAired = firstAired;
        newShow.id = req.params.id;
        newShow.network = network;
        newShow.overview = overview;
        newShow.status = status;
        newShow.subscriber = subid;

        Show.createShow(newShow, function(err) {
          if (err)
          throw err;

          // if successful, return the new user
          console.log("Succeeded");
        });
      }
      else{
        Show.findOne({'subscriber' : subid}, (err, result)=>{
          if(err) throw err;
          if(!result){
            Show.update(
              { "name": req.body.name},
              { "$push": { "subscriber": subid } },
              function (err, raw) {
                if (err) return console.log(err);
                console.log('The raw response from Mongo was ', raw);
              }
            );
          }
          else {
            console.log("Already subscribed")
          }
        })
      }
    })
  })

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

  // facebook -------------------------------

  // send to facebook to do the authentication
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/login'
  }));

  // google ---------------------------------

  // send to google to do the authentication
  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect : '/',
    failureRedirect : '/login'
  }));

  // =============================================================================
  // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
  // =============================================================================

  // // locally --------------------------------
  // app.get('/connect/local', function(req, res) {
  //   res.render('connect-local.ejs', { message: req.flash('loginMessage') });
  // });
  // app.post('/connect/local', passport.authenticate('local-signup', {
  //   successRedirect : '/profile', // redirect to the secure profile section
  //   failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
  //   failureFlash : true // allow flash messages
  // }));
  //
  // facebook -------------------------------

  // send to facebook to do the authentication
  app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

  // handle the callback after facebook has authorized the user
  app.get('/connect/facebook/callback',
  passport.authorize('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/'
  }));

  // github --------------------------------

  // send to github to do the authentication
  app.get('/connect/github', passport.authorize('github', { scope : 'email' }));

  // handle the callback after github has authorized the user
  app.get('/connect/github/callback',
  passport.authorize('github', {
    successRedirect : '/profile',
    failureRedirect : '/'
  }));


  // google ---------------------------------

  // send to google to do the authentication
  app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

  // the callback after google has authorized the user
  app.get('/connect/google/callback',
  passport.authorize('google', {
    successRedirect : '/profile',
    failureRedirect : '/'
  }));

  // =============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', function(req, res) {
    var user            = req.user;
    user.local.email    = undefined;
    user.local.password = undefined;
    user.save(function(err) {
      res.redirect('/');
    });
  });

  // facebook -------------------------------
  app.get('/unlink/facebook', function(req, res) {
    var user            = req.user;
    user.facebook.token = undefined;
    user.save(function(err) {
      res.redirect('/');
    });
  });

  // github --------------------------------
  app.get('/unlink/github', function(req, res) {
    var user           = req.user;
    user.github.token = undefined;
    user.save(function(err) {
      res.redirect('/profile');
    });
  });

  // google ---------------------------------
  app.get('/unlink/google', function(req, res) {
    var user          = req.user;
    user.google.token = undefined;
    user.save(function(err) {
      res.redirect('/profile');
    });
  });


  app.get('/search/:id', function(req, res){
    var parser = xml2js.Parser({
      explicitArray: false,
      normalizeTags: true
    });
    const tvdb = new TVDB('0YTLHQL6Q63URBKV');
    tvdb.getSeriesByName(req.params.id).then((response, body) => {

      // for (var i = 0; i < response.length; i++) {
      //   var newShow = new Show();
      //
      //   newShow._id = response[i].id;
      //   newShow.name = response[i].seriesName;
      //   newShow.firstAired = response[i].
      // }

      res.send(response)
    }).catch(error => { throw error });
  });


};

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
  return next();

  // if they aren't redirect them to the home page
  res.redirect('/login');
}
