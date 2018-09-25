module.exports = {

  'facebookAuth' : {
    'clientID'      : '2161976784064530', // your App ID
    'clientSecret'  : '11835e570eaba63a0ccd674e1ea8d845', // your App Secret
    'callbackURL'   : 'https://assignment3bysian.herokuapp.com/auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },

  'googleAuth' : {
    'clientID'      : '361998679532-l9u5gk921j1k3hksa9a2dkes3s2k7kkm.apps.googleusercontent.com',
    'clientSecret'  : 'u6ZssCDWHsp0msllcWb5hybI',
    'callbackURL'   : 'https://assignment3bysian.herokuapp.com/auth/google/callback'
  }
}
