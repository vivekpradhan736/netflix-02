import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAMLcr4gL52vitwiXDNLcY5KFtIvplr7E",
    authDomain: "netflix-clone02.firebaseapp.com",
    projectId: "netflix-clone02",
    storageBucket: "netflix-clone02.appspot.com",
    messagingSenderId: "280150893938",
    appId: "1:280150893938:web:c9db0962490d292dbc69eb",
    measurementId: "G-492FXT8J2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;