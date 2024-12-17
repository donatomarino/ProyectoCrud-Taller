import path from 'path';
import { fileURLToPath } from 'url';
//----Importación authOperations
import { signIn } from './authOperations.js';

//----Importación MongoOperations
import {
    crearBaseDeDatos,
    crearColeccion,
    insertarDocumento,
    obtenerPrimerElemento,
    verTodos,
    querySimple,
    sortPorCampo,
    borrarDocumento,
    actualizarDocumento
} from './mongoOperations.js';

// Obtén __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const index = (req, res) => {
    res.redirect("http://localhost:3000/")
}

export const register = async (req, res) => {
    try {
        await crearBaseDeDatos();
        await crearColeccion("Usuarios");
        await insertarDocumento('Usuarios', { nombre: req.body.first_name, apellido: req.body.last_name, email: req.body.email });
        //console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
        res.send("Insertados en la tabla Usuarios los siguientes datos: " + JSON.stringify(req.body));

    }catch(error){
        console.log(error);
    }
    
}

export const login = async (req, res) => {
    console.log("-----DEBUG-----", req.body)
    await signIn(req.body.email, req.body.password)
    res.redirect("/")
}

export const allItems = async (req, res) => {
    await verTodos("components");
    console.log("---Todos los datos ----")
    res.send(req.body);
}