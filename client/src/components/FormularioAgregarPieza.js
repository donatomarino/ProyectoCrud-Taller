// Carlos / 17-12-2024 / FormularioAgregarPiezas para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0
// Rafa / 19-12-2024 / Funcionalidad añadir piezas corregida / 1.0.0

import React, {useState} from "react";
import '../styles/FormularioAgregarPieza.css';


export default function FormularioAgregarPieza({piezas}){


  //Enviar una nueva pieza
  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemToUpdate = {
      id: e.target[0].value,
      marca: e.target[1].value,
      tipo: e.target[2].value,
      precio_compra: e.target[3].value,
      precio_venta: e.target[4].value,
      
  };
    try {
      // Enviar los datos al servidor
      const response = await fetch("http://127.0.0.1:3001/create-tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemToUpdate),
      });

      // Manejar la respuesta del servidor
      if (response.ok) {
        const data = await response.json();
        console.log("Pieza añadida con éxito:", data);

        // Recargar la página para que se apliquen los cambios
        window.location.href = "/encargado";

      } else {
        console.error("Error al añadir la pieza:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

    return(
        <form onSubmit={(e)=>handleSubmit(e)} className="addPieza-form">
            <h3 className="addPieza-title">Añadir Nueva Pieza</h3>

            <input
              type="number"
              name="id"
              placeholder="ID"
              value={piezas}
              readOnly
              className="addPieza-textInput"
            />

            <input
              name="marca"
              placeholder="Marca"
              className="addPieza-textInput"
            />

            <input
              name="tipo"
              placeholder="Tipo"
              className="addPieza-textInput"
            />
            
            <input
              type="number"
              name="precio_compra"
              placeholder="Precio Compra"
              className="addPieza-textInput"
            />

            <input
              type="number"
              name="precio_venta"
              placeholder="Precio Venta"
              className="addPieza-textInput"
            />

            <button type="submit" className="addPieza-submitBtn">
              AÑADIR
            </button>
        </form>
  );
}