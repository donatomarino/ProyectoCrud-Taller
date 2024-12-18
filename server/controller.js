//----Importación authOperations
import { signIn } from './authOperations.js';

//----Importación MongoOperations
import {
    insertarDocumento,
    verTodos,
    searchForName,
    actualizarDocumento
} from './mongoOperations.js';

export const index = (req, res) => {
    res.redirect("http://localhost:3000/")
}

export const login = async (req, res) => {
    console.log("-----DEBUG-----", req.body)
    await signIn(req.body.email, req.body.password)
    res.redirect("http://localhost:3000/")
}

// Mostrar todo el inventario
export const allItems = async (req, res) => {
    const items = await verTodos("components"); // Cogemos el archivo json con todos las herramientas
    console.log("---Todos los datos ----")
    res.json(items);
}

// Crear una nueva herramienta
export const createTool = async (req, res) => {
    try {
        const newTool = {
            id: req.body.id,
            tipo: req.body.tipo,
            marca: req.body.marca,
            precio: {
                precio_compra: req.body.precio_compra,
                precio_venta: req.body.precio_venta,
            },
            visible: "true",
        };

        // Insertar el documento en la base de datos
        await insertarDocumento("components", newTool);

        console.log("--- Nueva herramienta creada ----");

        // Responder con status 200 y un mensaje
        res.status(200).json({ message: "Herramienta creada exitosamente" });
    } catch (error) {
        console.error("Error al crear herramienta:", error);
        res.status(500).json({ message: "Error al crear herramienta", error });
    }
};
