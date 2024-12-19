// Carlos / 17-12-2024 / ListaSolicitudes para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import { useEffect, useState } from 'react'
import '../styles/ListaSolicitudes.css'

//Este componente muesta una lista de incidencias.
export default function ListaIncidencias({solicitudes}){

    const [requests, setRequests] = useState(null)

    useEffect(()=>{
        async function getSolicitudes(){
            try{
                const response = await fetch("http://127.0.0.1:3001/all-incidences")
                if(response.ok){
                    const gettingRequests = await response.json();
                    setRequests(gettingRequests.data);
                    console.log(gettingRequests.data);
                }
            }catch(e){  
                console.log(e);
            }
        }
        getSolicitudes()
    },[])



    return(
        <div className="addSolicitude-container">

        {/*Aquí debería ir la llamada de las colicitudes que escriba la página Mecánico*/}
            <h3 className="addSolicitude-title">Indicencias</h3>
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