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

export { auth }