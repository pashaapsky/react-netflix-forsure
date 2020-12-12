import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

const firebaseConfig = {
    apiKey: "AIzaSyDbkCEoRnfAHoxrXWvnxmX0mHiA4wo6gU0",
    authDomain: "react-netflix-forsure.firebaseapp.com",
    databaseURL: "https://react-netflix-forsure.firebaseio.com",
    projectId: "react-netflix-forsure",
    storageBucket: "react-netflix-forsure.appspot.com",
    messagingSenderId: "721433516345",
    appId: "1:721433516345:web:83d85ade89b316d49d70e8"
};

const firebase = Firebase.initializeApp(firebaseConfig);

// запускать только 1 раз для заполнения данных в базу данных firebase
// seedDatabase(firebase);

export {firebase};