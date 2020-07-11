const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://happyproject-8e44b.firebaseio.com" 
  });

  const db = admin.firestore();

  module.exports = {admin, db};