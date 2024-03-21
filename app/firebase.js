// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, FacebookAuthProvider, signInWithPopup,TwitterAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS5m4I73rQNA6lZYr24WaaDOrn_OQs4Gw",
  authDomain: "nextjs-auth-project-e0199.firebaseapp.com",
  projectId: "nextjs-auth-project-e0199",
  storageBucket: "nextjs-auth-project-e0199.appspot.com",
  messagingSenderId: "471488682631",
  appId: "1:471488682631:web:02f0e04e29c5572c6cf622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fbAuthProvider = new FacebookAuthProvider();

const Twprovider = new TwitterAuthProvider();

export const auth = getAuth(app);


export const FacebookAuth= async()=>{

  const fbAuth = signInWithPopup(auth,fbAuthProvider);
  return fbAuth;
}

export const twitterAuth = async()=>{

  const TwAuth =  signInWithPopup(auth, Twprovider);
  return TwAuth;
}