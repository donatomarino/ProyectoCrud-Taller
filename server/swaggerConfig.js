// Carlos / 19-12-2024 / swagger / 1.0.0
// Jaime / 19-12-2024 / swagger / 1.0.0

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto CRUD Taller API",
      version: "1.0.0",
      description: "Documentación de la API para el proyecto CRUD Taller",
    },
    servers: [
      {
        url: "http://localhost:3001", 
      },
    ],
  },
  apis: ["./router.js"], // los endpoints
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };
