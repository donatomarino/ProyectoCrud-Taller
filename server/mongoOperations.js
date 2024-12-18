// Donato / 17-12-2024 / Creación de listado herramienta JSON desde el MongoDB
// Donato / 17-12-2024 / Implementación functión 'verTodos' - 'searchForName'


import { MongoClient } from 'mongodb';

const mydb = "TallerMecanico"; // Nombre datebase

const url = "mongodb://127.0.0.1:27017/"; // URL database

// Conectamos el db
async function connectToMongo() {
    const client = new MongoClient(url);
    await client.connect();
    return client;
}

//Insertar dentro de una coleccion de una BD
async function insertarDocumento(coleccion, documento) {
    const client = await connectToMongo();
    const db = client.db(mydb);
    const collection = db.collection(coleccion);
    const resultado = await collection.insertOne(documento);
    console.log(`Documento insertado con ID: ${resultado.insertedId}`);
    await client.close();
}

// Ver todos los elementos
async function verTodos(coleccion) {
    const client = await connectToMongo();
    try {
        const db = client.db(mydb);
        const collection = db.collection(coleccion);
        const result = await collection.find({}).toArray();
        console.log(result);
        return result;
    } finally {
        await client.close();
    }
}

// Buscar por nombre
async function searchForName(coleccion, query) {
    const client = await connectToMongo();
    try {
        const db = client.db(mydb);
        const collection = db.collection(coleccion);
        const result = await collection.find(query).toArray();
        console.log(result);
        return result;
    } finally {
        await client.close();
    }
}


//Actualizar
async function actualizarDocumento(coleccion, filtro, actualizacion) {
    const client = await connectToMongo();
    const db = client.db(mydb);
    const collection = db.collection(coleccion);
    const resultado = await collection.updateOne(filtro, { $set: actualizacion });
    console.log(`${resultado.modifiedCount} documento(s) actualizado(s).`);
    await client.close();
    return resultado;
}

export {
    insertarDocumento,
    verTodos,
    actualizarDocumento,
    searchForName
};


/* module.exports = {
    crearBaseDeDatos,
    crearColeccion,
    insertarDocumento,
    obtenerPrimerElemento,
    verTodos,
    querySimple,
    sortPorCampo,
    borrarDocumento,
    actualizarDocumento
}; */