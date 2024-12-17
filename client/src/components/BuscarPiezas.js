// Carlos / 17-12-2024 / BuscarPiezas para la página Encargado / 1.0.0

export default function BuscarPiezas(){
    return(

        
        <form action="http://127.0.0.1:3001/create-tool" method="POST">
            <h3>Buscar Pieza</h3>
            <input type="text" placeholder="Buscar por nombre"/>
            <input type = "submit" placeholder = "Buscar"></input>
        </form>
    )
}