import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAEZxzPGDn4cs9bqmnCj96fK7W8q4cNeF0",
    authDomain: "mallsss.firebaseapp.com",
    databaseURL: "https://mallsss-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mallsss",
    storageBucket: "mallsss.appspot.com",
    messagingSenderId: "112419969478",
    appId: "1:112419969478:web:d99acc1cac07f738ebbac7",
    measurementId: "G-GW1TP1VTJ1"
}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db };