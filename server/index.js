//----Importación MongoOperations
const {
  crearBaseDeDatos,
  crearColeccion,
  insertarDocumento,
  obtenerPrimerElemento,
  verTodos,
  querySimple,
  sortPorCampo,
  borrarDocumento,
  actualizarDocumento
} = require('./mongoOperations');

//----Importación authOperations
const { signIn } = require('./authOperations');

//Inicialización express
const express = require('express');
const app = express();


// console.log('Hola');


// Agregar middleware para analizar el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', async (req, res) => {
  
  await crearBaseDeDatos();
  await crearColeccion("Usuarios");
  await insertarDocumento('Usuarios', { nombre: req.body.first_name, apellido: req.body.last_name, email:req.body.email});
  //console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
  res.send("Insertados en la tabla Usuarios los siguientes datos: " +JSON.stringify(req.body));
});

//------------- SECCION DE LOGIN -------------
app.post('/login', async (req, res) => {
  
  await signIn('encargado@taller.com', '123456');

  res.send("Insertados en la tabla Usuarios los siguientes datos");
});

app.listen(3001);
