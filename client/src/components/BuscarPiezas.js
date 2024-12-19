// Carlos / 17-12-2024 / BuscarPiezas para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0
// Carlos / 18-12-2024 / BuscarPiezas para la página Encargado / 1.0.0
import {useState } from 'react';
import '../styles/BuscarPiezas.css';
import PiezaItem from './PiezaItem';

export default function BuscarPiezas( { type } ){

  //Valor del input
    const [nombreBusqueda, setNombreBusqueda] = useState("");

  //Estado para los resultados
    const [resultados, setResultados] = useState([])

    //Manejamos los cambios en el input de búsqueda
    const handleCambiosInput = (e) => {
      setNombreBusqueda(e.target.value);
    };

    const handleBusqueda = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch (`http://127.0.0.1:3001/search`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nombreBusqueda}),
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log("Resultados de búsqueda:", data);
          setResultados(data); // actualiza el estado con los resultados obtenidos.
        }else{
          console.error("Error al buscar la pieza:", response.statusText);
        }
        
      } catch (error) {
        console.error("Error en la busqueda:", error)
      }
    }
    return(

        <div className="buscarPiezas-container">
            <form onSubmit={handleBusqueda} className="buscarPiezas-form">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="buscarPiezas-textInput"
          name="tipo"
          value={nombreBusqueda}
          onChange={handleCambiosInput} // Maneja el cambio en el input
        />
        <button type="submit" className="buscarPiezas-btn">
          BUSCAR
        </button>
      </form>
      <div className="buscarPiezas-resultados">
        {type === 'encargado' ?
         (
          resultados.map((pieza, index) => (
            <PiezaItem key={index} pieza={pieza} type= 'encargado' /> // Mostrar cada resultado usando PiezaItem
          ))
        )
       :
       (
        resultados.map((pieza, index) => (
          <PiezaItem key={index} pieza={pieza} type= 'mecanico' /> // Mostrar cada resultado usando PiezaItem
        ))
      )
       }
      </div>
    </div>
    )
}