const { firebaseAuth } = require("../firebaseAdminApp");

module.exports = async function (idToken) {
  const { uid } = await firebaseAuth.verifyIdToken(idToken);
  return uid;
};
