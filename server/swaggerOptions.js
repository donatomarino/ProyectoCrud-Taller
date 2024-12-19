// Jaime / 19-12-2024 / Configuración de Swagger
import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentación",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
      contact: {
        name: "4Team",
      },
    },
    servers: [
      {
        url: "http://localhost:3001", // Cambia la URL si tu servidor está en otro puerto
      },
    ],
  },
  apis: ["./router.js"], // Archivos donde se encuentran los comentarios para Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs };