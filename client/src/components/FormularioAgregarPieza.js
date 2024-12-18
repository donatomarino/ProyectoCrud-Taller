// Carlos / 17-12-2024 / FormularioAgregarPiezas para la página Encargado / 1.0.0
// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import React, {useState} from "react";
import '../styles/FormularioAgregarPieza.css';


export default function FormularioAgregarPieza({onAgregar}){

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
        // window.location.href = "/";
      } else {
        console.error("Error al añadir la pieza:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };



  /*Volcar la información de la nueva pieza a la base de datos*/
    // const [nuevaPieza, setNuevaPieza] = useState({
    //     id: "",
    //     nombre: "",
    //     precioCompra: "",
    //     precioVenta: "",
    //   });
    
    //   const handleChange = (e) => {
    //     setNuevaPieza({
    //       ...nuevaPieza,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onAgregar(nuevaPieza);
    //     setNuevaPieza({ id: "", nombre: "", precioCompra: "", precioVenta: "" });
    //   };
    return(
        <form onSubmit={handleSubmit} className="addPieza-form">
            <h3 className="addPieza-title">Añadir Nueva Pieza</h3>
            <input
              name="id"
              placeholder="ID"
              // value={nuevaPieza.id}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="marca"
              placeholder="Marca"
              // value={nuevaPieza.nombre}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="precio_compra"
              placeholder="Precio Compra"
              // value={nuevaPieza.precio_compra}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="precio_venta"
              placeholder="Precio Venta"
              // value={nuevaPieza.precio_venta}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <input
              name="tipo"
              placeholder="Tipo"
              // value={nuevaPieza.tipo}
              onChange={handleChange}
              className="addPieza-textInput"
            />
            <button type="submit" className="addPieza-submitBtn">AÑADIR</button>
        </form>
  );
}