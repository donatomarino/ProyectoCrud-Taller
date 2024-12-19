import express from "express"
import cors from "cors"

//----Importación de router
import router from './router.js';

//----Importación Swagger
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./swaggerOptions.js"

const FRONTEND_URL = process.env.FRONTEND_URL || "http://127.0.0.1:3001";
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

// Configuración de Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router)

export default app;