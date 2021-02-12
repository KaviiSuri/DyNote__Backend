const firebaseAdminSdk = require("firebase-admin");

// The Firebase Config is converted to a Base64 encoded string to make it easy to work with
firebaseAdmin = firebaseAdminSdk.initializeApp({
  credential: firebaseAdminSdk.credential.cert(
    JSON.parse(
      Buffer.from(process.env.FIREBASE_CONFIG_BASE64, "base64").toString(
        "ascii"
      )
    )
  ),
});

const firebaseAuth = firebaseAdmin.auth();

module.exports = {
  firebaseAdmin,
  firebaseAuth,
};
