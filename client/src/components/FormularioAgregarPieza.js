// Carlos / 17-12-2024 / FormularioAgregarPiezas para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import React, {useState} from "react";
import '../styles/FormularioAgregarPieza.css';


export default function FormularioAgregarPieza({onAgregar}){

  /*Volcar la información de la nueva pieza a la base de datos*/
    const [nuevaPieza, setNuevaPieza] = useState({
        id: "",
        nombre: "",
        precioCompra: "",
        precioVenta: "",
      });
    
      const handleChange = (e) => {
        setNuevaPieza({
          ...nuevaPieza,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onAgregar(nuevaPieza);
        setNuevaPieza({ id: "", nombre: "", precioCompra: "", precioVenta: "" });
      };
    return(
        <form onSubmit={handleSubmit} className="addPieza-form">
            <h3 className="addPieza-title">Añadir Nueva Pieza</h3>
            <input
              name="id"
              placeholder="ID"
              value={nuevaPieza.id}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="nombre"
              placeholder="Nombre"
              value={nuevaPieza.nombre}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="precioCompra"
              placeholder="Precio Compra"
              value={nuevaPieza.precioCompra}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="precioVenta"
              placeholder="Precio Venta"
              value={nuevaPieza.precioVenta}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <button type="submit" className="addPieza-submitBtn">AÑADIR</button>
        </form>
  );
}