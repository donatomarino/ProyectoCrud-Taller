// Rafa / 16-12-2024 / Inicio AuthOperations / 1.0.0
// Jaime / 18-12-2024 / Funcion signIn con respuesta del servidor / 1.0.1
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

/**
 * Función para iniciar sesión usando FireAuth
 * @param {text} email 
 * @param {text} password 
 * @returns credentials -> las credenciales del usuario que inicia sesión
 */ 
async function signIn(email, password) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    // setLoggedIn(true);
    return credentials;
  } catch (error) {
    console.error("Error en la autenticación:", error);
    throw error; //erro se maneja en controller
  }
};

export { signIn } 