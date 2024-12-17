import express from "express"
import cors from "cors"

//----Importación de router
import router from './router.js';

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const app = express()
app.use(
    cors({
      credentials: true,
      origin: FRONTEND_URL,
    })
  );

// Agregar middleware para analizar el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router)

export default app;