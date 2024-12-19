// Carlos / 17-12-2024 / ListaSolicitudes para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0
// Rafa / 19-12-2024 / Funcionalidad para recibir todas las solicitudes / 1.0.0

import { useEffect, useState } from 'react'
import '../styles/ListaSolicitudes.css'

//Este componente muesta una lista de incidencias.
export default function ListaSolicitudes({solicitudes}){

    //Guardamos la lista de solicitudes en un estado
    const [requests, setRequests] = useState(null)

    //Cargar todas las solicitudes al renderizarse el componente
    useEffect(()=>{
        async function getSolicitudes(){
            //Petición GET para obtener lista de solicitudes
            try{
                const response = await fetch("http://127.0.0.1:3001/all-requests")
                if(response.ok){
                    const gettingRequests = await response.json();
                    setRequests(gettingRequests.data);
                }
            }catch(e){  
                console.log(e);
            }
        }
        getSolicitudes()
    },[])



    return(
        <div className="addSolicitude-container">
            <h3 className="addSolicitude-title">Solicitudes</h3>
            <ul className="addSolicitude-list">
                {requests && requests.map((request, i) => (

                <li className="addSolicitude-item" key={i}>
                    <p className="addSolicitude-asunto"><span>Asunto:</span>{request.title}</p>
                    <p className="addSolicitude-descripcion"><span>Descripción:</span>{request.descripcion}</p>
                </li>

                ))}

            </ul>
        </div>
    )
}