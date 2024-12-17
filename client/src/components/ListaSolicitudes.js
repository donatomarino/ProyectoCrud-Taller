// Carlos / 17-12-2024 / ListaSolicitudes para la página Encargado / 1.0.0


//Este componente muesta una lista de incidencias.
export default function ListaSolicitudes({solicitudes}){
    return(
        <div>

        {/*Aquí debería ir la llamada de las colicitudes que escriba la página Mecánico*/}
            <h3>Solicitudes</h3>
            <ul>
                {solicitudes.map((solicitud, indice) =>(
                    <li key={indice}> {solicitud}</li>
                ))}
            </ul>
        </div>
    )
}