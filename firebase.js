import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBoMHVaGrGYVSSQvLvRmbpO9RQTyCekzkM",
    authDomain: "whatsapp-36595.firebaseapp.com",
    projectId: "whatsapp-36595",
    storageBucket: "whatsapp-36595.appspot.com",
    messagingSenderId: "974835646814",
    appId: "1:974835646814:web:42c73f2d69d70b01164fcf"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();    

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };