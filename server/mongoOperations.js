// Donato / 17-12-2024 / Creación de listado herramienta JSON desde el MongoDB
// Donato / 18-12-2024 / Implementación functión 'verTodos' - 'searchForName' - 'creacionIncidencia'
// Donato / 19-12-2024 / Complemento función 'crearCollecion'

import { MongoClient } from 'mongodb';

const mydb = "TallerMecanico"; // Nombre datebase

const url = "mongodb://127.0.0.1:27017/"; // URL database

/**
 * Conexión con la Base de Datos
 * @returns -> retorna la conexión de la BD client
 */
async function connectToMongo() {
    const client = new MongoClient(url);
    await client.connect();
    return client;
}

/**
 * Creacion de una coleccion dentro de una BD
 * @param {string} coleccion -> nombre de la colección que se crea
 * @param {JSON} documento -> documento que se inserta dentro de la colección
 */
async function crearColeccion(coleccion, documento) {
    const client = await connectToMongo();
    const db = client.db(mydb);

    // Sacamos todas las colecciones 
    const collections = await db.listCollections().toArray();
    const currentCollections = collections.map(collection => collection.name);

    // Si la coleccion no existe la crea, si no añade el documento
    if(!currentCollections.includes(coleccion)){
        await db.createCollection(coleccion);
        console.log(`Colección '${coleccion}' creada.`);
        insertarDocumento(coleccion, documento)
        await client.close();
    } else{
        insertarDocumento(coleccion, documento)
    }
}

/**
 * Insertar dentro de una coleccion de una BD
 * @param {string} coleccion -> nombre de la colección a la que se le inserta el documento
 * @param {JSON} documento -> documento que se inserta dentro de la colección 
 */
async function insertarDocumento(coleccion, documento) {
    const client = await connectToMongo();
    const db = client.db(mydb);
    const collection = db.collection(coleccion);
    const resultado = await collection.insertOne(documento);
    console.log(`Documento insertado con ID: ${resultado.insertedId}`);
    await client.close();
}

/**
 * Ver todos los elementos dentro de una colección
 * @param {string} coleccion -> coleccion que se consulta
 * @returns result -> Array con los documentos en la BD
 */
async function verTodos(coleccion) {
    const client = await connectToMongo();
    try {
        const db = client.db(mydb);
        const collection = db.collection(coleccion);
        const result = await collection.find({}).toArray();
        return result;
    } finally {
        await client.close();
    }
}

/**
 * Buscar un documento por nombre dentro de un colección
 * @param {string} coleccion -> Colección que se consulta
 * @param {string} query -> Texto con el que se busca el documento 
 * @returns result -> Array con los documentos en la BD que coinciden con @param query
 */
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


/**
 * Actualizar un documento dentro de la colección
 * @param {string} coleccion -> Colección donde se busca el documento
 * @param {string} filtro -> Texto del documento buscado
 * @param {JSON} actualizacion -> JSON que actualiza el documento
 * @returns resultado -> el resultado de la actualización del documento
 */
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