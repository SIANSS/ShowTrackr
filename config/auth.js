var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
console.log(baseUrl);
module.exports = {

  'facebookAuth' : {
    'clientID'      : '2161976784064530', // your App ID
    'clientSecret'  : '11835e570eaba63a0ccd674e1ea8d845', // your App Secret
    'callbackURL'   : baseUrl+'auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },

  'googleAuth' : {
    'clientID'      : '921167686999-8icl96ecvcmit8ksuksrhujrj93m1sep.apps.googleusercontent.com',
    'clientSecret'  : 'Nmdf3uPn9YnzRxtLzcJmaXdf',
    'callbackURL'   : baseUrl+'auth/google/callback'
  },

  'githubAuth' : {
    'clientID'      : '9db554532d7cacb63785',
    'clientSecret'  : '113607387d32d08c5ec5d64dc32c61c85713b627',
    'callbackURL'   : baseUrl+'auth/github/callback'
  }
  //'TVDBAuth'      : {
   // "apikey": "0YTLHQL6Q63URBKV",
   // "userkey": "YD1PT12QZJSR6NNO",
   // "username": "acsian7pq8",
   // 'callbackURL'   : 'http://localhost:8080/auth/TVDB'
  }
//   {
//   "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzc0OTI1NTEsImlkIjoiVHJhY0ZsaXgiLCJvcmlnX2lhdCI6MTUzNzQwNjE1MSwidXNlcmlkIjo1MTE5NjIsInVzZXJuYW1lIjoiYWNzaWFuN3BxOCJ9.Yz5Cfjemg-tM9gVdek1e6j59IMghLwdAwtFTZKxkp6woo-TpLXlAmTmO67TTTizveV0_KVDwdjorq88Vv1kyrVWN5WIzKGQFEije8k728FkDtEjPOVRhoiEvSeTgvt0sbQ_N3c3XALgvvFvvNcNObfUjkxw67zK9AGiaB8LpLXtSAlBonue2klZovsAgd-1TTIenMubt6ofwxo52UpalnQi50c44yTspl-qECoM8EHQlK014pNAsO1f5gThNyz7NWjD6x6B3gWW6koCYN-n2zBsQ6QVmd1e2d_T_Qq_zUSh1Y2vyfcbauWcWQyWa4-daUy8H3EV7R1gqeDUCZ1G0Pw"
// }

}
