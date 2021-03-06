import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApPKgS0tJPK3IkmKdf4F8L0TGt-jC6eEc",
  authDomain: "stencil-with-firebase.firebaseapp.com",
  databaseURL: "https://stencil-with-firebase.firebaseio.com",
  projectId: "stencil-with-firebase",
  storageBucket: "stencil-with-firebase.appspot.com",
  messagingSenderId: "583518100333",
  appId: "1:583518100333:web:9a90334c963cf3b5b4d864",
};

class FirebaseController {
  app: firebase.app.App;
  auth: firebase.auth.Auth;
  googleAuthProvider: firebase.auth.GoogleAuthProvider;

  constructor() {
    this.app = firebase.initializeApp(firebaseConfig);
    this.auth = this.app.auth();
    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  }
}

export const Firebase = new FirebaseController();
