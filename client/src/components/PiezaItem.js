// Carlos / 17-12-2024 / PiezaItem para la página Encargado / 1.0.0
// Rafa / 19-12-2024 / Funcionalidad editar item OPERATIVA / 1.0.0
// Rafa / 19-12-2024 / Limpiando código y comentado / 1.0.0

import { useState } from "react";
import '../styles/PiezaItem.css';

//Componente para la pieza y los botones para manejar la actulización y delete.
export default function PiezaItem( { pieza, type, piezas, id } ){

    const [editItem, setEditItem] = useState(false);
    
      //FUNCIÓN PARA EDITAR UNA HERRAMIENTA
      const handleSubmit = async (e) => {
        e.preventDefault();

        const itemToUpdate = {
          id: e.target[0].value,
          marca: e.target[1].value,
          tipo: e.target[2].value,
          precio_compra: e.target[3].value,
          precio_venta: e.target[4].value,
          
      };

      console.log(typeof e.target[0].value);

        try {
          // Enviar los datos al servidor
          const response = await fetch("http://127.0.0.1:3001/update", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(itemToUpdate),
          });

          // Manejar la respuesta del servidor
          if (response.ok) {
            const data = await response.json();

            //Recargamos la página para ver los cambios
            window.location.href = `/encargado`;
            
          } else {
            console.error("Error al añadir la pieza:", response.statusText);
          }
        } catch (error) {
          console.error("Error al enviar los datos:", error);
        }
      };

      //FUNCIÓN PARA ELIMINAR UNA HERRAMIENTA
      const deleteItem = async(e)=>{

        const idToDelete = { id: e.target.id, visible: "true" };

        //Realizamos la solicitud PATCH para settear el estado en NO VISIBLE
        try{
          const response = await fetch("http://127.0.0.1:3001/delete-item", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(idToDelete),
          });

          if(response.ok){
            console.log('Pieza borrada con éxito');
            window.location.href = `/encargado`;
            // const timeOut = ()=>{
            //   setTimeout(()=>{
            //     window.location.href = `/encargado`;
            //   }, 1000)
            // }
            // timeOut();
            
          }else{
            console.log('Ha habido un problema');
          }
        }catch(e){
          console.log('Error', e)
        }
      }

    return(
        <li className="pieza-item">
            <div className="pieza-header">
                <span className="pieza-name">Marca: {pieza.marca}</span>
                <span className="pieza-id">ID: {pieza.id}</span>
            </div>
            <div className='pieza-body'>
                {!editItem 
                ?
                <div className="pieza-info">
                    <span className="pieza-brand">Tipo: {pieza.tipo}</span>
                    <span className="pieza-price">Precio compra: {pieza.precio.precio_compra}</span>
                    <span className="pieza-price">Precio: {pieza.precio.precio_venta}</span>
                </div>

                :

                <form onSubmit={(e)=>handleSubmit(e)} className='editItem-form'>
              
                  <div className='editItem-dataContent'>

                    <input type='text' name='id' id='id' value={id} disabled={true} className='editItem-textInput' placeholder='ID'/>

                    <input type='text' name='marca' id='marca' className='editItem-textInput' placeholder='Marca'/>

                    <input type='text' name='tipo' id='tipo' className='editItem-textInput' placeholder='Tipo'/>
                            
                    <input type='number' name='precio_compra' id='precio_compra' className='editItem-textInput' placeholder='Precio compra'/>

                    <input type='number' name='precio_compra' id='precio_venta' className='editItem-textInput' placeholder='Precio venta'/>

                  </div>

                    <button className='editItem-sendChangesBtn'>Confirmar</button>

                </form>
                }

                {/* Si es la página de encargado mostramos los botones para mostrar y editar */}

                {type === 'encargado' && 
                <div className="pieza-buttons">
                {!editItem ?
                <>
                    <button className="pieza-editItemBtn" onClick={()=>{
                        setEditItem(true);
                    }}>Editar</button>
                    <button id={pieza.id} className="pieza-deleteBtn" onClick={(e)=>deleteItem(e)}>Eliminar</button>
                </>
                    
                :
                    <button className="pieza-editItemBtn" onClick={()=>{
                        setEditItem(false);
                    }}>Cancelar</button>
                }
                
                
            </div>
            }
                
            </div>
        </li>
    )
}