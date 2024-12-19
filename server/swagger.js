const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API CRUD Taller Mecánico",
      version: "1.0.0",
      description: "Documentación de la API para gestionar piezas, incidencias y usuarios",
    },
    servers: [
      {
        url: "http://127.0.0.1:3001", // URL del backend
      },
    ],
  },
  apis: ["./controller.js", "./mongoOperations.js"], // endpoints
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
