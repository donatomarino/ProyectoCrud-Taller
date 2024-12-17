// Carlos / 17-12-2024 / FormularioAgregarPiezas para la página Encargado / 1.0.0
import React, {useState} from "react";

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
        <form onSubmit={handleSubmit}>
      <h3>Añadir Nueva Pieza</h3>
      <input
        name="id"
        placeholder="ID"
        value={nuevaPieza.id}
        onChange={handleChange}
      />
      <input
        name="nombre"
        placeholder="Nombre"
        value={nuevaPieza.nombre}
        onChange={handleChange}
      />
      <input
        name="precioCompra"
        placeholder="Precio Compra"
        value={nuevaPieza.precioCompra}
        onChange={handleChange}
      />
      <input
        name="precioVenta"
        placeholder="Precio Venta"
        value={nuevaPieza.precioVenta}
        onChange={handleChange}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}