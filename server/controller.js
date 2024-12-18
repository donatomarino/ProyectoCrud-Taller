// Jaime / 18-12-2024 / Funciones del controller con respuesta del servidor / 1.0.1
//----Importación authOperations
import { signIn } from './authOperations.js';

//----Importación MongoOperations
import {
    insertarDocumento,
    verTodos,
    searchForName,
    actualizarDocumento,
    crearColeccion
} from './mongoOperations.js';

export const index = (req, res) => {
    res.redirect("http://localhost:3000/")
}

export const login = async (req, res) => {
    // Almacena email y password desde la req.body
    console.log(req.body);
    const { email, password, rol } = req.body;

    try {
        // en credentials guarda el resultado de la función signIn
        const credentials = await signIn(email, password);

        console.log('CONECTADO CORRECTAMENTE');
        
        // Responder con un status 200 y un mensaje de éxito
        if(rol === 'Encargado'){
            res.redirect("http://localhost:3000/encargado")
        }else if(rol === 'Mecanico'){
            res.redirect("http://localhost:3000/mecanico")
        }
        
        // return res.status(200).json({
        //     message: 'Inicio de sesión exitoso',
        //     user: credentials.user.email
        // });
        
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);

        // Manejar errores específicos de password o email
        if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
            return res.status(401).json({
                message: 'Email o contraseña incorrectos'
            });
        }

        // Manejar otros errores de forma genérica
        return res.status(500).json({
            message: 'Ha habido un problema inesperado',
            error: error.message
        });
    }

}

// Mostrar todo el inventario
export const allItems = async (req, res) => {
    try {
        // Obtener todos los elementos desde la base de datos
        const items = await verTodos("components");

        console.log("--- Todos los datos obtenidos correctamente ---");

        // Verificar si el inventario está vacío
        if (!items || items.length === 0) {
            console.warn("No hay datos que recuperar de la base de datos.");
            return res.status(401).json({
                message: "No hay datos que recuperar de la base de datos",
            });
        }

        // Responder con estado 200 y los datos obtenidos
        return res.status(200).json({
            message: "Inventario obtenido exitosamente",
            data: items
        });
    } catch (error) {
        console.error("Error al obtener el inventario:", error);

        // Manejo de errores generales
        return res.status(500).json({
            message: "Error al obtener el inventario",
            error: error.message
        });
    }
};

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
        // res.status(200).json({ message: "Herramienta creada exitosamente" });
    } catch (error) {
        console.error("Error al crear herramienta:", error);
        res.status(500).json({ message: "Error al crear herramienta", error });
    }
};

// Crear una nueva solicitud
export const createRequest = async (req, res) => {
    try {
        // los datos de la solicitud se almacenan en esta constante
        const newRequest = {
            tipo: req.body.tipo,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            resuelta: "false",
        };

        // Insertar el documento en la base de datos
        await insertarDocumento("solicitudes", newRequest);

        console.log("--- Nueva solicitud creada ----");

        // Responder con status 200 y un mensaje
        res.status(200).json({ message: "Solicitud creada exitosamente" });
    } catch (error) {
        console.error("Error al crear la solicitud:", error);
        res.status(500).json({ message: "Error al crear la solicitud", error });
    }
};

// Mostrar todas las solicitudes
export const allRequests = async (req, res) => {
    try {
        // Obtener todos los elementos desde la base de datos
        const requests = await verTodos("solicitudes");

        console.log("--- Todos las solicitudes obtenidos correctamente ---");

        // Verificar si la coleccion "solicitudes" está vacío
        if (!requests || requests.length === 0) {
            console.warn("No hay datos que recuperar de la base de datos.");
            return res.status(401).json({
                message: "No hay datos que recuperar de la base de datos",
            });
        }

        // Responder con estado 200 y los datos obtenidos
        return res.status(200).json({
            message: "solicitudes obtenidas exitosamente",
            data: requests
        });
    } catch (error) {
        console.error("Error al obtener las solicitudes:", error);

        // Manejo de errores generales
        return res.status(500).json({
            message: "Error al obtener las solicitudes",
            error: error.message
        });
    }
};

// export const update = async(req, res) => {
//     const upd = await actualizarDocumento("components", {tipo: 'Llaves de impacto'}, {marca: 'Prueba'});
//     console.log("Hola" + upd)
//     res.send(upd)
// }
// Carlos / 18-12-2024 / search para la búsqueda por nombre / 1.0.0
// Donato / 18-12-2024 / search para la búsqueda por nombre / 1.0.0
export const search = async (req, res) => {
    // Obtenemos el valor de búsqueda desde el cuerpo de la solicitud
    const { nombreBusqueda } = req.body; 

    // Realizamos la búsqueda usando el valor proporcionado por el usuario
    const resultados = await searchForName("components", { tipo: nombreBusqueda });

    // Devolvemos los resultados obtenidos
    res.status(200).json(resultados);
};

// Update
export const update = async(req, res) => {
    console.log(req.body.tipo);
    console.log("--------------")
    console.log("--------------")
    console.log("--------------")
    console.log("--------------")
    console.log("--------------")

    const {id , marca, tipo, precio_compra, precio_venta} = req.body;
    
    try {
        await actualizarDocumento("components", {id: req.body.id}, {id: req.body.id, marca: req.body.marca, tipo: req.body.tipo, precio_venta: req.body.precio_venta, precio_compra: req.body.precio_compra, visible: true});

        console.log('-----Herramienta actualizada----')
        // res.json(upd)
        // Devolvemos los resultados obtenidos
        // res.status(200).json(resultados);
        res

        // res.redirect("http://localhost:3000/")
    } catch(e) {
        console.log("Error: " + e)
    }
}

// Incidencias
export const createIncidence = async (req, res) => {
    try {
        // los datos de la incidencia se almacenan en esta constante
        const newIncidence = {
            tipo: req.body.tipo,
            title: req.body.title,
            descripcion: req.body.descripcion,
            resuelta: "false",
        };

        // Insertar el documento en la base de datos
        await crearColeccion("incidencias", newIncidence);

        console.log("--- Nueva incidencia creada ----");
        res.send(newIncidence)

        // Responder con status 200 y un mensaje
        res.status(200).json({ message: "Incidencia insertada exitosamente" });
    } catch (error) {
        console.error("Error al crear la incidencia:", error);
        res.status(500).json({ message: "Error al crear la incidencia", error });
    }
};