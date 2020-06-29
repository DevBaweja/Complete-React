import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDwhfPag5OtdUfzZqCc6BGN7tI6laWgICk',
    authDomain: 'crown-clothing-3518d.firebaseapp.com',
    databaseURL: 'https://crown-clothing-3518d.firebaseio.com',
    projectId: 'crown-clothing-3518d',
    storageBucket: 'crown-clothing-3518d.appspot.com',
    messagingSenderId: '717941750097',
    appId: '1:717941750097:web:8f5d86f9b035ac7309bb70',
    measurementId: 'G-GFKZWL3M5D',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
