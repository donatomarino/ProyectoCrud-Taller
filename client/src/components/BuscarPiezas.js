// Carlos / 17-12-2024 / BuscarPiezas para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import '../styles/BuscarPiezas.css';

export default function BuscarPiezas(){
    return(

        <div className="buscarPiezas-container">
            <h3 className="buscarPiezas-title">Buscar Pieza</h3>
            <input type="text" placeholder="buscar por" className="buscarPiezas-textInput"/>
        </div>
    )
}