const {
    crearBaseDeDatos,
    crearColeccion,
    insertarDocumento
  } = require('./mongoOperations');
  const express = require('express');
  const swaggerUi = require("swagger-ui-express");
  const swaggerDocs = require("./swaggerOptions"); // Asegúrate de tener el archivo swaggerOptions.js
  const cors = require('cors'); // Asegúrate de requerir cors
  
  const app = express(); // Mueve esta línea al principio
  
  app.use(cors()); // Permitir CORS para todas las solicitudes
  app.use(express.json()); // Analizar cuerpos JSON de las solicitudes
  
  // Configuración de Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
  /**
   * @swagger
   * /:
   *   get:
   *     summary: Página principal
   *     responses:
   *       200:
   *         description: Devuelve el archivo index.html
   */
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  /**
   * @swagger
   * /:
   *   post:
   *     summary: Inserta un nuevo usuario
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               first_name:
   *                 type: string
   *               last_name:
   *                 type: string
   *               email:
   *                 type: string
   *     responses:
   *       200:
   *         description: Usuario insertado
   */
  app.post('/', async (req, res) => {
    try {
      await crearBaseDeDatos(); // Si la base de datos no existe, se crea
      await crearColeccion("Usuarios"); // Crear colección solo si no existe
      await insertarDocumento('Usuarios', { nombre: req.body.first_name, apellido: req.body.last_name, email: req.body.email });
      res.send("Insertados en la tabla Usuarios los siguientes datos: " + JSON.stringify(req.body));
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al insertar el usuario");
    }
  });
  
  /**
   * @swagger
   * /api/endpoint:
   *   get:
   *     summary: Endpoint GET
   *     responses:
   *       200:
   *         description: Respuesta del endpoint GET
   */
  app.get("/api/endpoint", (req, res) => {
    res.send("Soy un endpoint GET");
  });
  
  /**
   * @swagger
   * /api/endpoint:
   *   post:
   *     summary: Endpoint POST
   *     responses:
   *       200:
   *         description: Respuesta del endpoint POST
   */
  app.post("/api/endpoint", (req, res) => {
    res.send("Soy un endpoint POST");
  });
  
  /**
   * @swagger
   * /api/endpoint:
   *   put:
   *     summary: Endpoint PUT
   *     responses:
   *       200:
   *         description: Respuesta del endpoint PUT
   */
  app.put("/api/endpoint", (req, res) => {
    res.send("Soy un endpoint PUT");
  });
  
  /**
   * @swagger
   * /api/endpoint:
   *   delete:
   *     summary: Endpoint DELETE
   *     responses:
   *       200:
   *         description: Respuesta del endpoint DELETE
   */
  app.delete("/api/endpoint", (req, res) => {
    res.send("Soy un endpoint DELETE");
  });
  
  // Iniciar el servidor en el puerto 5000
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
  