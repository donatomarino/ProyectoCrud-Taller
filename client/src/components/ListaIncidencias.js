// Carlos / 17-12-2024 / ListaSolicitudes para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0
// Rafa / 19-12-2024 / Funcionalidad recibir todas las incidencias / 1.0.0
// Donato / 19-12-2024 / Implementación botones "Listo" y "Resuelto" en el form Incidencias / 1.0.0

import { useEffect, useState } from 'react'
import '../styles/ListaSolicitudes.css'

//Este componente muesta una lista de incidencias.
export default function ListaIncidencias({ solicitudes }) {

    //Guardamos la lista de solicitudes en un estado
    const [requests, setRequests] = useState([]);

    //Cargar todas las incidencias al renderizarse el componente
    useEffect(() => {
        async function getSolicitudes() {
            //Petición GET para obtener lista de incidencias
            try {
                const response = await fetch("http://127.0.0.1:3001/all-incidences")
                if (response.ok) {
                    const gettingRequests = await response.json();
                    setRequests(gettingRequests.data);
                }
            } catch (e) {
                console.log(e);
            }
        }
        getSolicitudes()
    }, []);

    // Si está solucionada la incidencia
    const requestState = async (parSearch) => {
        const datos = {
            coleccion: 'incidencias',
            title: parSearch.title,
            descripcion: parSearch.descripcion
        }

        //Realizamos la solicitud PATCH para settear el estado en NO VISIBLE
        try {
            const response = await fetch("http://127.0.0.1:3001/request-solved", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ datos }),
            });

            if (response.ok) {
                console.log('Incidencia solucionada con éxito');
                window.location.href = `/encargado`;
            } else {
                console.log('Ha habido en el confirmar la resolución de la incidencia');
            }
        } catch (e) {
            console.log('Error', e)
        }
    }

    return (
        <div className="addSolicitude-container">
            <h3 className="addSolicitude-title">Incidencias</h3>
            <ul className="addSolicitude-list">
                {requests.length !== 0 ? requests.map((request, i) => (
                    <li className="addSolicitude-item" key={i}>
                        <p className="addSolicitude-asunto"><span>Asunto:</span>{request.title}</p>
                        <p className="addSolicitude-descripcion"><span>Descripción:</span>{request.descripcion}</p>
                        <button className="pieza-editItemBtn" onClick={() => {
                            requestState(request);
                        }}>Resuelto</button>
                    </li>
                )) : 
                    <h5>No hay nuevas incidencias</h5>
                }
            </ul>
        </div>
    )
}