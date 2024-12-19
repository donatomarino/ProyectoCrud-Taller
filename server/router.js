// Donato - 18/12/2024 - Implementación ruta 'all-items' - 'search' - 'incidencias'
// Donato - 19/12/2024 - Implementación ruta 'delete-item'
// Rafa - 19/12/2024 - He añadido la ruta /all-requests
// Carlos / 19-12-2024 / swagger / 1.0.0

import { Router } from "express";
import { allIncidences, allItems, allRequests, createIncidence, createRequest, createTool, deleteItem, index, login, update } from "./controller.js";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Redirige a la página principal
 *     responses:
 *       200:
 *         description: Redirección exitosa
 */
router.get("/", index);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica a un usuario
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
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error inesperado
 */
router.post("/login", login)
/**
 * @swagger
 * /all-items:
 *   get:
 *     summary: Obtiene todos los elementos del inventario
 *     responses:
 *       200:
 *         description: Lista de todos los elementos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: No hay datos disponibles
 *       500:
 *         description: Error en el servidor
 */
router.get("/all-items", allItems)
/**
 * @swagger
 * /create-tool:
 *   post:
 *     summary: Crea una nueva herramienta en el inventario
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
 *         description: Herramienta creada exitosamente
 *       500:
 *         description: Error al crear herramienta
 */
router.post("/create-tool", createTool)
/**
 * @swagger
 * /search:
 *   post:
 *     summary: Busca un elemento por nombre
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
 *         description: Resultados de búsqueda obtenidos
 *       500:
 *         description: Error en la búsqueda
 */
/**
 * @swagger
 * /update:
 *   patch:
 *     summary: Actualiza un elemento del inventario
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
 *         description: Herramienta actualizada exitosamente
 *       500:
 *         description: Error al actualizar
 */
router.patch("/update", update);

/**
 * @swagger
 * /incidencias:
 *   post:
 *     summary: Crea una nueva incidencia
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
 *         description: Incidencia creada exitosamente
 *       500:
 *         description: Error al crear incidencia
 */
router.post("/incidencias", createIncidence);

/**
 * @swagger
 * /solicitudes:
 *   post:
 *     summary: Crea una nueva solicitud
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
 *         description: Solicitud creada exitosamente
 *       500:
 *         description: Error al crear solicitud
 */
router.post("/solicitudes", createRequest);

/**
 * @swagger
 * /delete-item:
 *   patch:
 *     summary: Marca un elemento como no visible en el inventario
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
 *         description: Elemento eliminado exitosamente
 *       500:
 *         description: Error al eliminar el elemento
 */
router.patch("/delete-item", deleteItem);

/**
 * @swagger
 * /all-requests:
 *   get:
 *     summary: Obtiene todas las solicitudes
 *     responses:
 *       200:
 *         description: Lista de todas las solicitudes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: No hay solicitudes disponibles
 *       500:
 *         description: Error en el servidor
 */
router.get("/all-requests", allRequests);

/**
 * @swagger
 * /all-incidences:
 *   get:
 *     summary: Obtiene todas las incidencias
 *     responses:
 *       200:
 *         description: Lista de todas las incidencias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: No hay incidencias disponibles
 *       500:
 *         description: Error en el servidor
 */
router.get("/all-incidences", allIncidences);

export default router;