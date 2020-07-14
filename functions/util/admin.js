const admin = require('firebase-admin');

const serviceAccount = require("../happyproject-8e44b-379ba10c4384.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "happyproject-8e44b.appspot.com",
    databaseURL: "https://happyproject-8e44b.firebaseio.com" 
  });

const db = admin.firestore();

module.exports = {admin, db};