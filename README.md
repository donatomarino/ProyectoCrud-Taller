# ProyectoCrud-Taller **

Colaboradores: Carlos, Donato, Alex, Jaime y Rafa

# FRONT END DOCUMENTACIÓN: 
## `Login.js` 

 - Componente de Login que maneja la autenticación de usuarios.
 - Este componente renderiza un formulario de inicio de sesión con campos para el correo electrónico, contraseña y selección de rol.
 - Envía una solicitud POST al servidor con los datos del formulario cuando se envía el formulario.
 - Si el inicio de sesión es exitoso, el usuario es redirigido a la URL proporcionada por el servidor.
 - Si hay un error, se muestra un mensaje de error.


 ## `Register.js`

- Renderiza un formulario de registro que envía datos a la ruta /register del servidor.
- Utiliza el componente Input para los campos del formulario.

# `FormularioAgregarPiezas.js`

- Permite al usuario ingresar información detallada sobre una nueva pieza.
- Valida los campos para garantizar que los datos ingresados sean correctos.
- Emite un callback cuando se añade una nueva pieza para integrarse con otros componentes o servicios.

## Propiedades

| Propiedad    | Tipo       | Descripción                                                                       |
|--------------|------------|-----------------------------------------------------------------------------------|
| `onAgregar`  | `Function` | Callback que se llama cuando se añade una nueva pieza. Recibe los datos ingresados. |

## `BuscarPiezas.js`

- Permite a los usuarios buscar piezas en el sistema por nombre.
- El componente renderiza un formulario con un campo de texto para ingresar el nombre de la pieza y un botón de búsqueda.
- Utiliza el estado `nombreBusqueda` para almacenar el valor ingresado por el usuario y el estado `resultados` para almacenar los resultados obtenidos de la búsqueda.
- **Manejo de cambios en el input**: El estado `nombreBusqueda` se actualiza cada vez que el usuario escribe en el campo de búsqueda.
- Al enviar el formulario, se realiza una solicitud `POST` al servidor (`http://127.0.0.1:3001/search`) con el texto de búsqueda.
- **Condicional de tipo de usuario**: El componente adapta la visualización de los resultados dependiendo del tipo de usuario (`encargado` o `mecanico`), utilizando el componente `PiezaItem` para renderizar cada resultado.
- Si la búsqueda es exitosa, se actualiza el estado `resultados` con los datos obtenidos desde el servidor.
- Si ocurre algún error durante la búsqueda, se muestra un mensaje de error en la consola.

## `FormAddSolicitud.js`

 - El componente renderiza un formulario para añadir una nueva "solicitud".
 - Maneja el envío del formulario y envía una solicitud POST al servidor con los datos del formulario.
 - En caso de envío exitoso, redirige al usuario a la página "/mecanico".


# `FormIncidencia.js`

- Este componente representa un formulario para enviar nuevas incidencias, y los envia al servidor /incidencias.

# `FormularioAgregarPieza.js`

- Este componente representa un formulario para agregar una nueva pieza.

- piezas: Este prop se utiliza para establecer el valor del campo id en el formulario. Este campo está deshabilitado y  no se puede modificar.
## Funciones
- handleSubmit: Esta función se ejecuta cuando se envía el formulario. Realiza las siguientes acciones:
- Previene el comportamiento por defecto del formulario.
- Crea un objeto itemToUpdate con los valores de los campos del formulario.
- Envía una solicitud POST al servidor con los datos del objeto itemToUpdate.
- Maneja la respuesta del servidor:
- Si la respuesta es exitosa (response.ok), muestra un mensaje en la consola y recarga la página.
- Si hay un error, muestra un mensaje de error en la consola.


## `ListaIncidencias.js`

Este componente muestra una lista de incidencias obtenidas desde un servidor. Al renderizarse, realiza una petición GET para cargar las incidencias y las almacena en un estado interno. Luego, las despliega en un formato de lista estilizado.
- Hay un botton "Resuelto" que cuando le pinchas, la incidencia se quita de la lista y se almacena en otra colleción llamada 'request-solved'.

## `ListaSolicitudes.js`

Este componente muestra una lista de solicitudes de nuevas piezas obtenidas desde un servidor. Al renderizarse, realiza una petición GET para cargar las solicitudes y las almacena en un estado interno. Luego, las despliega en un formato de lista estilizado.
- Hay un botton "Listo" que cuando le pinchas, la incidencia se quita de la lista y se almacena en otra colleción llamada 'request-solved'.

### Características:
- Realiza una solicitud a un servidor para obtener todas las incidencias.
- Renderiza dinámicamente la lista de incidencias.
- Muestra un mensaje si no hay incidencias disponibles.

## `PiezaItem.js`

Este componente muestra información detallada de una pieza y proporciona botones para editar o eliminar la pieza. Es utilizado en la página del encargado para gestionar el inventario de piezas.

### Características:
- **Mostrar información:** Muestra los datos de una pieza, como ID, marca, tipo, precio de compra y precio de venta.
- **Editar pieza:** Permite actualizar la información de una pieza mediante un formulario.
- **Eliminar pieza:** Cambia el estado de visibilidad de una pieza en el servidor a "no visible".

### Props:
| Propiedad  | Tipo       | Descripción                                                     |
|------------|------------|-----------------------------------------------------------------|
| `pieza`    | `Object`   | Objeto que contiene la información de la pieza a mostrar.       |
| `type`     | `String`   | Define el contexto de uso del componente, como "encargado".     |
| `piezas`   | `Array`    | Lista de todas las piezas disponibles (opcional).              |
| `id`       | `String`   | ID único de la pieza.                                          |

### Funciones principales:
- **`handleSubmit`:** Actualiza la información de una pieza enviando los datos al servidor con una solicitud `PATCH`.
- **`deleteItem`:** Cambia el estado de una pieza a "no visible" mediante una solicitud `PATCH`.

# src/pages

# `Encargado.js`

Este componente representa la página principal para el área del encargado. Incluye funcionalidades para gestionar piezas, solicitudes, incidencias, y agregar nuevas herramientas.

### Características:
- **Listado de piezas:** Obtiene y muestra un listado de herramientas disponibles desde el servidor.
- **Búsqueda:** Incluye un componente para buscar herramientas específicas.
- **Gestión de solicitudes e incidencias:** Muestra las listas de solicitudes e incidencias actuales.
- **Agregar nueva pieza:** Proporciona un formulario para añadir herramientas al inventario.
- **Diseño modular:** Utiliza un encabezado y pie de página comunes a través de componentes reutilizables.

### Funcionalidades principales:
- **Carga inicial:** Al montar el componente, realiza una solicitud al servidor para obtener el listado de piezas visibles.
- **Renderizado dinámico:** Muestra los componentes de forma modular, incluyendo herramientas, solicitudes, incidencias y el formulario.

### Componentes utilizados:
- **`Header`:** Encabezado con el título del área.
- **`Footer`:** Pie de página para el diseño uniforme.
- **`BuscarPiezas`:** Herramienta para buscar piezas específicas.
- **`PiezaItem`:** Representa cada herramienta con opciones para editar o eliminar.
- **`ListaSolicitudes`:** Muestra las solicitudes actuales.
- **`ListaIncidencias`:** Despliega incidencias registradas.
- **`FormularioAgregarPieza`:** Permite al encargado añadir nuevas herramientas.

# `Mecanico.js`

Este componente representa la página principal para el área de mecánicos, facilitando la gestión y el registro de herramientas, incidencias y solicitudes.

### Características:
- **Listado de herramientas:** Obtiene y muestra una lista de herramientas visibles desde el servidor.
- **Búsqueda de herramientas:** Incluye un componente para buscar herramientas específicas según criterios.
- **Registro de incidencias:** Permite registrar nuevas incidencias relacionadas con herramientas.
- **Gestión de solicitudes:** Proporciona un formulario para añadir solicitudes de herramientas o materiales.

### Funcionalidades principales:
- **Carga inicial:** Realiza una solicitud al servidor al montar el componente para obtener la lista de herramientas disponibles.
- **Interfaz modular:** Divide la página en secciones claras para buscar, listar herramientas y registrar información adicional.
- **Estado dinámico:** Utiliza el estado interno para almacenar la lista de herramientas y actualizarla dinámicamente.

### Componentes utilizados:
- **`Header`:** Muestra el título del área para mecánicos.
- **`Footer`:** Define un pie de página consistente con el diseño general.
- **`BuscarPiezas`:** Permite buscar herramientas específicas.
- **`PiezaItem`:** Renderiza cada herramienta del listado.
- **`FormIncidencia`:** Formulario para registrar incidencias.
- **`FormAddSolicitud`:** Formulario para crear nuevas solicitudes de materiales o herramientas.

### Notas:
- **Endpoint usado:** `http://127.0.0.1:3001/all-items` para cargar el listado de herramientas disponibles.
- **Organización:** El diseño está dividido en un contenedor izquierdo para las herramientas y un contenedor derecho para los formularios de incidencias y solicitude



# BACKEND DOCUMENTACIÓN:

# `controller.js`

Este archivo implementa varias funciones para manejar operaciones en el servidor, enfocadas principalmente en herramientas, solicitudes e incidencias. Utiliza FireAuth para autenticación y MongoDB para la gestión de datos.

---

## Funciones principales:

### 1. **Redirección al Front (`index`)**
   - Redirige a la URL principal del frontend (`http://127.0.0.1:3000/`).

---

### 2. **Inicio de sesión (`login`)**
   - Realiza autenticación con Firebase mediante la función `signIn`.
   - Verifica el rol del usuario y responde con URLs de redirección específicas para "Encargado" y "Mecánico".
   - Maneja errores comunes como credenciales inválidas y responde con códigos HTTP adecuados (`401`, `500`).

---

### 3. **Gestión de herramientas**
   - **`allItems`**: Obtiene todas las herramientas visibles de la base de datos.
   - **`createTool`**: Crea una nueva herramienta en la colección `components`. Los precios de compra y venta se manejan como objetos anidados.
   - **`update`**: Actualiza los datos de una herramienta existente en la colección.
   - **`deleteItem`**: Marca una herramienta como no visible (`visible: "false"`) en lugar de eliminarla físicamente.
   - **`search`**: Busca herramientas en la colección `components` según el nombre del tipo.

---

### 4. **Gestión de solicitudes**
   - **`createRequest`**: Crea una nueva solicitud en la colección `solicitudes`.
   - **`allRequests`**: Obtiene todas las solicitudes existentes.
   - **`requestSolved`**: Almacena las solicitudes que hayan sido aporbadas en otra colección y las quita de la actual.

---

### 5. **Gestión de incidencias**
   - **`allIncidences`**: Recupera todas las incidencias registradas.
   - **`createIncidence`**: Inserta una nueva incidencia en la colección `incidencias`.
   - **`requestSolved`**: Almacena las incidencias que hayan sido solucionadas en otra colección y las quita de la actual.


---

## Manejo de Errores:
- Utiliza bloques `try-catch` en cada función para manejar excepciones.
- Responde con mensajes informativos y códigos HTTP como:
  - `200` para éxito.
  - `401` para datos inexistentes o no autorizados.
  - `500` para errores inesperados en el servidor.

---

## Dependencias:
- **Firebase Auth:** Para autenticación de usuarios con `signIn`.
- **MongoDB Operations:** Funciones para realizar CRUD en las colecciones:
  - `insertarDocumento`, `verTodos`, `actualizarDocumento`, `crearColeccion`, `searchForName`.

---

## Notas:
- Todas las funciones interactúan directamente con la base de datos o la lógica de autenticación.


# `mongoOperations.js`

Este archivo implementa las operaciones CRUD básicas para interactuar con una base de datos MongoDB. La estructura modular permite una fácil reutilización de las funciones en otros componentes del proyecto.

---

## Conexión a la Base de Datos

### 1. **`connectToMongo()`**
   - Establece la conexión con la base de datos MongoDB utilizando la URL `mongodb://127.0.0.1:27017/`.
   - Devuelve un cliente conectado que puede ser usado para realizar operaciones en la base de datos.

---

## Operaciones principales

### 2. **`crearColeccion(coleccion, documento)`**
   - **Descripción**: Crea una nueva colección si no existe, y añade un documento a dicha colección.
   - **Pasos**:
     - Obtiene todas las colecciones actuales de la base de datos.
     - Si la colección no existe:
       - Se crea la nueva colección.
       - Se inserta el documento especificado.
     - Si ya existe, solo inserta el documento.
   - **Uso**: Útil para insertar datos iniciales en una base de datos con nuevas colecciones.

---

### 3. **`insertarDocumento(coleccion, documento)`**
   - **Descripción**: Inserta un documento JSON en una colección existente.
   - **Resultado**: Muestra el ID del documento insertado.
   - **Uso**: Para añadir registros individuales a una colección.

---

### 4. **`verTodos(coleccion)`**
   - **Descripción**: Recupera todos los documentos de una colección específica.
   - **Resultado**: Devuelve un array con los documentos encontrados.
   - **Uso**: Para listar todos los elementos almacenados en una colección.

---

### 5. **`searchForName(coleccion, query)`**
   - **Descripción**: Realiza una búsqueda en una colección usando un criterio específico.
   - **Parámetros**:
     - `coleccion`: Nombre de la colección a buscar.
     - `query`: Objeto JSON que define los criterios de búsqueda.
   - **Resultado**: Devuelve un array con los documentos que coinciden con la consulta.
   - **Uso**: Filtrar datos en función de un atributo específico.

---

### 6. **`actualizarDocumento(coleccion, filtro, actualizacion)`**
   - **Descripción**: Actualiza un documento en una colección con nuevos valores.
   - **Parámetros**:
     - `coleccion`: Nombre de la colección donde buscar.
     - `filtro`: Criterio de búsqueda del documento a actualizar.
     - `actualizacion`: Objeto JSON que contiene los valores a modificar.
   - **Resultado**: Devuelve el resultado de la operación, incluyendo el número de documentos modificados.
   - **Uso**: Modificar atributos específicos de documentos existentes.

### 7. **`actualizarDocumento(coleccion, filtro)`**
   - **Descripción**:  * Borra un documento dentro de la colección.
   - **Parámetros**:
     - `coleccion`: Nombre de la colección donde buscar.
     - `filtro`: Criterio de búsqueda del documento que se quiere borrar.
   - **Uso**: Borrar documentos específicos de colecciones existentes.
