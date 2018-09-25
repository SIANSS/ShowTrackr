module.exports = {

  'facebookAuth' : {
    'clientID'      : '2161976784064530', // your App ID
    'clientSecret'  : '11835e570eaba63a0ccd674e1ea8d845', // your App Secret
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
