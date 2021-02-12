const {firebaseAuth} = require('../firebaseAdminApp')

module.exports = function(idToken) {
  return (await firebaseAuth.verifyIdToken(idToken)).uid;
}