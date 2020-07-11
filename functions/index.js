const functions = require('firebase-functions');

const app = require('express')();

const { getAllScreams} = require('./handlers/screams');
const {signup, login} = require('./handlers/users');

var serviceAccount = require("./happyproject-8e44b-379ba10c4384.json");

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

//Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

//users routes
app.post('/signup', signup );
app.post('/login', login);

exports.api = functions.region('europe-west1').https.onRequest(app);