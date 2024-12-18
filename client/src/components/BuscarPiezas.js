// Carlos / 17-12-2024 / BuscarPiezas para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import { useState } from 'react';
import '../styles/BuscarPiezas.css';
import PiezaItem from './PiezaItem';

export default function BuscarPiezas(){

    const [showItem, setShowItem] = useState('');

    useState(()=>{
        /* Manejar el envío del formulario */
        const handleSubmit = async (e) => {
          try {
            // Enviar los datos al servidor
            const response = await fetch("http://127.0.0.1:3001/search");
    
    
            // Manejar la respuesta del servidor
            if (response.ok) {
              const data = await response.json();
    
              console.log("Listado Mostrándose", data);
              setShowItem(await data.data);
    
            } else {
              console.error("Error al mostrar piezaas", response.statusText);
            }
          } catch (error) {
            console.error("Error al mostrar piezas:", error);
          }
        };
    
        handleSubmit();
    
        },[])

    return(
        // USEEFFECT y USESTATE
        <div className="buscarPiezas-container">
            <h3 className="buscarPiezas-title">Buscar Pieza</h3>
            <input type="text" placeholder="buscar por" className="buscarPiezas-textInput"/>
            {/* METERLE UN ONCLICK */}
            <button className="buscarPiezas-btn">
                BUSCAR
            </button>
            {showItem && <PiezaItem pieza={showItem }/>}
        </div>
    )
}