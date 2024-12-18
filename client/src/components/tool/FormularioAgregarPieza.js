// Carlos / 17-12-2024 / FormularioAgregarPiezas para la página Encargado / 1.0.0
// Jaime / 18-12-2024 / Conexión con el back del FormularioAgregarPiezas / 1.0.1
import React, { useState } from "react";
import Input from "../Input";
import '../../styles/FormularioAgregarPieza.css';


export default function FormularioAgregarPieza({ onAgregar }) {

  /*Estado para manejar la informaciómn de una nueva pieza*/
  const [nuevaPieza, setNuevaPieza] = useState({
    id: "",
    tipo: "",
    marca: "",
    precio_compra: "",
    precio_venta: "",
  });

  /* Manejar el cambio en los campos del formulario */
  const handleChange = (e) => {
    setNuevaPieza({
      ...nuevaPieza,
      [e.target.name]: e.target.value,
    });
  };

  /* Manejar el envío del formulario */
  const handleSubmit = async (e) => {
    try {
      // Enviar los datos al servidor
      const response = await fetch("http://127.0.0.1:3001/create-tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaPieza),
      });

      // Manejar la respuesta del servidor
      if (response.ok) {
        const data = await response.json();
        console.log("Pieza añadida con éxito:", data);

        // Llamar al callback para actualizar el estado del componente padre
        onAgregar(nuevaPieza);

        // Reiniciar el formulario
        setNuevaPieza({ id: "", tipo: "", marca: "", precio_compra: "", precio_venta: "" });

        // Redirigir a la ruta principal
        window.location.href = "/";
      } else {
        console.error("Error al añadir la pieza:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="addPieza-form" method="POST">
      <h3 className="addPieza-title">Añadir Nueva Pieza</h3>
      <div class="form-group">
        <Input tag="input" placeholder="Id" type="number" name="id" value={nuevaPieza.id} onChange={handleChange} />
      </div>
      <div class="form-group">
        <Input tag="input" placeholder="Tipo" type="text" name="tipo" value={nuevaPieza.nombre} onChange={handleChange} />
      </div>
      <div class="form-group">
        <Input tag="input" placeholder="Marca" type="text" name="marca" value={nuevaPieza.marca} onChange={handleChange} />
      </div>
      <div class="form-group">
        <Input tag="input" placeholder="Precio Compra" type="number" name="precio_compra" value={nuevaPieza.precio_compra} onChange={handleChange} />
      </div>
      <div class="form-group">
        <Input tag="input" placeholder="Precio Venta" type="number" name="precio_venta" value={nuevaPieza.precio_venta} onChange={handleChange} />
      </div>
      <Input tag="button" type="submit" placeholder="Añadir" />
    </form>
  );
}