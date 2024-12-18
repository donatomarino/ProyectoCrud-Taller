// Donato / 17-12-2024 / Creación de listado herramienta JSON desde el MongoDB
// Donato / 18-12-2024 / Implementación functión 'verTodos' - 'searchForName' - 'creacionIncidencia'

import { MongoClient } from 'mongodb';

const mydb = "TallerMecanico"; // Nombre datebase

const url = "mongodb://127.0.0.1:27017/"; // URL database

// Conectamos el db
async function connectToMongo() {
    const client = new MongoClient(url);
    await client.connect();
    return client;
}

//Creacion de una coleccion dentro de una BD
async function crearColeccion(coleccion, documento) {
    const client = await connectToMongo();
    const db = client.db(mydb);
    const currentCollections = db.getCollectionInfos().map(collection => collection.name);
    console.log(currentCollections)
    if(!currentCollections.includes(colleccion)){
        await db.createCollection(coleccion);
        console.log(`Colección '${coleccion}' creada.`);
        await client.close();
    } else{
        insertarDocumento(collecion, documento)
    }
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
    crearColeccion,
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
