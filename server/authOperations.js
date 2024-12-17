// Rafa / 16-12-2024 / Inicio AuthOperations / 1.0.0

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6odPRS2NZtX63sJq4nAUFPaBM5Cb2TaQ",
    authDomain: "proyectocrud-taller.firebaseapp.com",
    projectId: "proyectocrud-taller",
    storageBucket: "proyectocrud-taller.firebasestorage.app",
    messagingSenderId: "325359079956",
    appId: "1:325359079956:web:306b4387af868a3b40cd01"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


async function signIn(email, password) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    // console.log('credentials', credentials);
    // setLoggedIn(true);
    console.log('CONECTADO CORRECTAMENTE')

  } catch (error) {
    console.log(error)
    if (error.code === "auth/invalid-credential") {
      // alert('Contraseña incorrecta');
      console.log('Email o contraseña incorrectos')
    } else {
      console.log('Ha habido un problema inesperado')
    }
  }
}; 

export {signIn}  

/* module.exports = {
    signIn
  } */







