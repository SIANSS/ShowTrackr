module.exports = {

  'facebookAuth' : {
    'clientID'      : '435237723670533', // your App ID
    'clientSecret'  : 'c5666cb1784155e8fa97c1ef915fd320', // your App Secret
    'callbackURL'   : 'https://assignment3bysian.herokuapp.com/auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },
  'googleAuth' : {
    'clientID'      : '361998679532-a0vb1mdk4u3enapionu72f5ngk5e1dcr.apps.googleusercontent.com',
    'clientSecret'  : 'XgqdXYJ1u3UmmAcAQwBeCWce',
    'callbackURL'   : 'https://assignment3bysian.herokuapp.com/auth/google/callback'
  }
}
