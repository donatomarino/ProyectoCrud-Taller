// Carlos / 17-12-2024 / ListaSolicitudes para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import '../styles/ListaSolicitudes.css'

//Este componente muesta una lista de incidencias.
export default function ListaSolicitudes({solicitudes}){
    return(
        <div className="addSolicitude-container">

        {/*Aquí debería ir la llamada de las colicitudes que escriba la página Mecánico*/}
            <h3 className="addSolicitude-title">Solicitudes</h3>
            <ul className="addSolicitude-list">
                <li className="addSolicitude-item">
                    <p className="addSolicitude-asunto"><span>Asunto:</span> Aquí el asunto</p>
                    <p className="addSolicitude-descripcion"><span>Descripción:</span> Aquí la descripción</p>
                </li>
                <li className="addSolicitude-item">
                    <p className="addSolicitude-asunto"><span>Asunto:</span> Un segundo ejemplo</p>
                    <p className="addSolicitude-descripcion">Descripción: En este segundo ejemplo vemos un texto más largo a ver cómo queda. Si fueran varias lineas se vería tal que así.</p>
                </li>
                {/* {solicitudes.map((solicitud, indice) =>(
                    <li key={indice}> {solicitud}</li>
                ))} */}
            </ul>
        </div>
    )
}