import path from 'path';
import { fileURLToPath } from 'url';
//----Importación authOperations
import { signIn } from './authOperations.js';

//----Importación MongoOperations
import {
    insertarDocumento,
    verTodos,
    searchForName,
    actualizarDocumento
} from './mongoOperations.js';

// Obtén __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const index = (req, res) => {
    res.redirect("http://localhost:3000/")
}

export const login = async (req, res) => {
    console.log("-----DEBUG-----", req.body)
    await signIn(req.body.email, req.body.password)
    res.redirect("/")
}

// Mostramos todos los items
export const allItems = async (req, res) => {
    const items = await verTodos("components");
    console.log("---Todos los datos ----")
    res.send(items);
}

// Buscamos elemento por nombre
export const search = async (req, res) => {
    const busqueda = await searchForName("components", {tipo: 'Gato de elavación'});
    console.log(busqueda);
    res.send(busqueda)
}

// Insertamos elementos