// Carlos / 17-12-2024 / PiezaItem para la página Encargado / 1.0.0
// Rafa / 19-12-2024 / Funcionalidad editar item OPERATICA / 1.0.0

import '../styles/PiezaItem.css';
import { useState } from "react";



//Componente para la pieza y los botones para manejar la actulización y delete.
export default function PiezaItem( { pieza, type, piezas, id } ){

    const [editItem, setEditItem] = useState(false);
    const [editing, setEditing] = useState(false);
    
      //FUNCIÓN PARA EDITAR UNA HERRAMIENTA
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log((e.target[0]).value)

        const itemToUpdate = {
          id: parseInt(e.target[0].value),
          marca: e.target[1].value,
          tipo: e.target[2].value,
          precio_compra: e.target[3].value,
          precio_venta: e.target[4].value,
          
      };

        try {
          // Enviar los datos al servidor
          const response = await fetch("http://127.0.0.1:3001/update", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(itemToUpdate),
          });
          console.log(response);
          // Manejar la respuesta del servidor
          if (response.ok) {
            const data = await response.json();
            
            const timeOut = setTimeout(()=>{
              window.location.href = `/encargado`;
            },1000)
            
            timeOut();

            
          } else {
            console.error("Error al añadir la pieza:", response.statusText);
          }
        } catch (error) {
          console.error("Error al enviar los datos:", error);
        }
      };

      //FUNCIÓN PARA ELIMINAR UNA HERRAMIENTA
      const deleteItem = async(e)=>{
        console.log(typeof e.target.id)
        const idToDelete = { id: parseInt(e.target.id), visible: true };
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
            // const timeOut = setTimeout(()=>{
            //   window.location.href = `/encargado`;
            // },1000)
            
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
                    <span className="pieza-price">Precio compra: {pieza.precio.precio_compra}</span>
                    <span className="pieza-price">Precio: {pieza.precio.precio_venta}</span>
                </div>

                :

                <form onSubmit={(e)=>handleSubmit(e)} className='editItem-form'>
              
                        <div className='editItem-dataContent'>

                                <input type='text' name='id' id='id' value={id} readonly={true} className='editItem-textInput' placeholder='ID'/>

                                <input type='text' name='marca' id='marca' className='editItem-textInput' placeholder='Marca'/>

                                <input type='text' name='tipo' id='tipo' className='editItem-textInput' placeholder='Tipo'/>
                            
                                <input type='text' name='precio_compra' id='precio_compra' className='editItem-textInput' placeholder='Precio compra'/>

                                <input type='text' name='precio_compra' id='precio_venta' className='editItem-textInput' placeholder='Precio venta'/>
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