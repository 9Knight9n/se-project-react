import firebase from "firebase/app";
import 'firebase/messaging';
import "firebase/auth";
import {WEB_PUSH_CERTIFICATE} from "./constants";

const firebaseConfig = {
    apiKey: "AIzaSyBPkNtNdBHnjC-QJ9dbrnFQO3rcf1rwYRk",
    authDomain: "sweet-home-773bb.firebaseapp.com",
    projectId: "sweet-home-773bb",
    storageBucket: "sweet-home-773bb.appspot.com",
    messagingSenderId: "872929672242",
    appId: "1:872929672242:web:2b04bc0040f91495c6d02b",
    measurementId: "G-5RQ6W8YPE5",
};

if (!firebase)
    firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            console.log(payload)
            resolve(payload);
        });
    });


export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: WEB_PUSH_CERTIFICATE}).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

