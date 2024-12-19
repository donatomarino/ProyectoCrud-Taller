import { Router } from "express";
import { index, login, allItems, createTool, search, update, createIncidence, createRequest, deleteItem, allRequests, allIncidences } from "./controller.js";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Redirige al frontend.
 *     responses:
 *       303:
 *         description: Redirigido al Front.
 */
router.get("/", index);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión con email, password y rol.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               rol:
 *                 type: string
 *                 enum: [Encargado, Mecanico]
 *     responses:
 *       200:
 *         description: Inicio de sesión como encargado/mecánico exitoso.
 *       401:
 *         description: Email o contraseña incorrectos.
 *       500:
 *         description: Ha ocurrido un problema inesperado.
 */
router.post("/login", login);

/**
 * @swagger
 * /all-items:
 *   get:
 *     summary: Obtiene todos los elementos de la base de datos.
 *     responses:
 *       200:
 *         description: Lista de elementos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: No hay datos disponibles.
 *       500:
 *         description: Error al obtener los elementos.
 */
router.get("/all-items", allItems);

/**
 * @swagger
 * /create-tool:
 *   post:
 *     summary: Crea una nueva herramienta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               tipo:
 *                 type: string
 *               marca:
 *                 type: string
 *               precio_compra:
 *                 type: number
 *               precio_venta:
 *                 type: number
 *     responses:
 *       200:
 *         description: Herramienta creada exitosamente.
 *       500:
 *         description: Error al crear la herramienta.
 */
router.post("/create-tool", createTool);

/**
 * @swagger
 * /search:
 *   post:
 *     summary: Busca elementos por nombre en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreBusqueda:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resultados de búsqueda obtenidos exitosamente.
 *       500:
 *         description: Error al realizar la búsqueda.
 */
router.post("/search", search);

/**
 * @swagger
 * /update:
 *   patch:
 *     summary: Actualiza un elemento en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               tipo:
 *                 type: string
 *               marca:
 *                 type: string
 *               precio_compra:
 *                 type: number
 *               precio_venta:
 *                 type: number
 *     responses:
 *       200:
 *         description: Elemento actualizado exitosamente.
 *       500:
 *         description: Error al actualizar el elemento.
 */
router.patch("/update", update);

/**
 * @swagger
 * /incidencias:
 *   post:
 *     summary: Crea una nueva incidencia.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Incidencia creada exitosamente.
 *       500:
 *         description: Error al crear la incidencia.
 */
router.post("/incidencias", createIncidence);

/**
 * @swagger
 * /incidencias:
 *   post:
 *     summary: Crea una nueva incidencia.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Incidencia creada exitosamente.
 *       500:
 *         description: Error al crear la incidencia.
 */
router.post("/solicitudes", createRequest);

/**
 * @swagger
 * /delete-item:
 *   patch:
 *     summary: Marca un elemento como no visible.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Elemento eliminado exitosamente.
 *       500:
 *         description: Error al eliminar el elemento.
 */
router.patch("/delete-item", deleteItem);

/**
 * @swagger
 * /all-requests:
 *   get:
 *     summary: Obtiene todas las solicitudes.
 *     responses:
 *       200:
 *         description: Solicitudes obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: No hay solicitudes disponibles.
 *       500:
 *         description: Error al obtener las solicitudes.
 */
router.get("/all-requests", allRequests);

/**
 * @swagger
 * /all-incidences:
 *   get:
 *     summary: Obtiene todas las incidencias.
 *     responses:
 *       200:
 *         description: Incidencias obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: No hay incidencias disponibles.
 *       500:
 *         description: Error al obtener las incidencias.
 */
router.get("/all-incidences", allIncidences);

export default router;
