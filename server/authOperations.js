// Rafa / 16-12-2024 / Inicio AuthOperations / 1.0.0

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc, deleteDoc  } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6odPRS2NZtX63sJq4nAUFPaBM5Cb2TaQ",
    authDomain: "proyectocrud-taller.firebaseapp.com",
    projectId: "proyectocrud-taller",
    storageBucket: "proyectocrud-taller.firebasestorage.app",
    messagingSenderId: "325359079956",
    appId: "1:325359079956:web:306b4387af868a3b40cd01"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


console.log('CONECTADO CORRECTAMENTE');


async function signIn (email, password) {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);
        await loadData(email)
        setLoggedIn(true);

        return console.log('CONECTADO CORRECTAMENTE')
        
    } catch (error) {
      console.log(error.code)
        if (error.code === "auth/invalid-credential"){
            // alert('Contraseña incorrecta');
            setLoginError([true, 'signIn', 'Email o contraseña incorrectos'])
        }else{
            setLoginError([true, 'signIn', 'Ha habido un problema inesperado'])
        }
    }
  }; 

 module.exports = {
    signIn
  }

 






