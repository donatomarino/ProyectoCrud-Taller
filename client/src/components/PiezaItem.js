// Carlos / 17-12-2024 / PiezaItem para la página Encargado / 1.0.0

import '../styles/PiezaItem.css';
import { useState } from "react";



//Componente para la pieza y los botones para manejar la actulización y delete.
export default function PiezaItem({pieza, type, onActualizar, onBorrar}){

    const [editItem, setEditItem] = useState(false);
    /*Estado para manejar la informaciómn de una nueva pieza*/
      const [nuevaPieza, setNuevaPieza] = useState({
        id:"",
        tipo: "",
        marca: "",
        precio: {precio_compra: "", precio_venta: ""},
      });
    
      /* Manejar el cambio en los campos del formulario */
    //   const handleChange = (e) => {
    //     setNuevaPieza({
    //       ...nuevaPieza,
    //       [e.target.name]: e.target.value,
    //     });
    //     console.log(nuevaPieza);
    //   };

    const handleChange = (e) => {
            setNuevaPieza({
              ...nuevaPieza,
              [e.target.name]: e.target.value,
            });
            console.log(nuevaPieza);
          };
    
      /* Manejar el envío del formulario */
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            console.log(e.target);
          // Enviar los datos al servidor
          const response = await fetch("http://127.0.0.1:3001/update", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevaPieza),
          });
    
          // Manejar la respuesta del servidor
          if (response.ok) {
            const data = await response.json();
            console.log("Pieza añadida con éxito:", data);
    
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
    return(
        <li className="pieza-item">
            {/* Piezas de ejemplo */}
            <div className="pieza-header">
                <span className="pieza-name">Marca: {pieza.marca}</span>
                <span className="pieza-id">ID: {pieza.id}</span>
            </div>
            <div className='pieza-body'>
                {!editItem 
                ?
                <div className="pieza-info">
                    <span className="pieza-brand">Tipo: {pieza.tipo}</span>
                    <span className="pieza-price">Precio compra: {pieza.precio_compra}</span>
                    <span className="pieza-price">Precio: {pieza.precio_venta}</span>
                </div>

                :

                <form onSubmit={(e)=>handleSubmit(e)} className='editItem-form'>
                    <div className='editItem-formContainer'>
                        <div className='editItem-dataContent'>

                                <input type='text' name='id' id='id' className='editItem-textInput' placeholder='ID' onChange={handleChange}/>

                                <input type='text' name='marca' id='marca' className='editItem-textInput' placeholder='Marca' onChange={handleChange}/>

                                <input type='text' name='tipo' id='tipo' className='editItem-textInput' placeholder='Tipo' onChange={handleChange}/>
                            
                                <input type='text' name='precio_compra' id='precio_compra' className='editItem-textInput' placeholder='Precio compra' onChange={handleChange}/>

                                <input type='text' name='precio_compra' id='precio_venta' className='editItem-textInput' placeholder='Precio venta' onChange={handleChange}/>
                        </div>
                        
                    </div>
                    
                    
                    <button className='editItem-sendChangesBtn'>Confirmar</button>

                </form>
                }
                {type === 'encargado' && 
                <div className="pieza-buttons">
                {!editItem ?
                <>
                    <button className="pieza-editItemBtn" onClick={()=>{
                        setEditItem(true);
                    }}>Editar</button>
                    <button className="pieza-deleteBtn">Eliminar</button>
                </>
                    
                :
                    <button className="pieza-editItemBtn" onClick={()=>{
                        setEditItem(false);
                    }}>Cancelar</button>
                }
                
                
            </div>
            }
                

                
            </div>
            
            



            {/* <span>{pieza.nombre}</span>
            <button onClick={() =>onActualizar(pieza.id)}>Actualizar</button>
            <button onClick={() =>onBorrar(pieza.id)}>Borrar</button> */}
        </li>
    )
}