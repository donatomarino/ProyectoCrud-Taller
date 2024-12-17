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

// Mostrar todo el inventario
export const allItems = async (req, res) => {
    const items = await verTodos("components"); // Cogemos el archivo json con todos las herramientas
    console.log("---Todos los datos ----")
    res.json(items);
}

// Crear una nueva herramienta
export const createTool = async (req, res) => {
    const precioCompra = parseFloat(req.body.precio_compra);
    const precioVenta = parseFloat(req.body.precio_venta);
    const newTool = { 
        id: req.body.id,
        tipo: req.body.tipo, 
        marca: req.body.marca, 
        precio: {
            precio_compra: precioCompra,
            precio_venta: precioVenta
        },
        visible: true
    };
    const items = await insertarDocumento("components", newTool);
    console.log("--- Nueva herramienta creada ----")
    res.redirect("http://localhost:3000/create-tool")
}
