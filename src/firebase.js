import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDOIXXP_0t86pLSfI8Cbze_aMJFG72LzVI",
    authDomain: "linkedin-clone-942ad.firebaseapp.com",
    projectId: "linkedin-clone-942ad",
    storageBucket: "linkedin-clone-942ad.appspot.com",
    messagingSenderId: "136501509794",
    appId: "1:136501509794:web:442e72e2eaeb01449021fb",
    measurementId: "G-84X7VQTZNH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {
    db,
    auth
  }