// Carlos / 17-12-2024 / PiezaItem para la página Encargado / 1.0.0

import '../styles/PiezaItem.css';
import { useState } from "react";



//Componente para la pieza y los botones para manejar la actulización y delete.
export default function PiezaItem({pieza, onActualizar, onBorrar}){

    const deleteItem = ()=>{
        console.log(pieza);
    }

    const [editItem, setEditItem] = useState(false);

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

                <form className='editItem-form'>
                    <div className='editItem-formContainer'>
                        <div className='editItem-dataContent'>
                            
                                <input type='text' name='id' id='id' className='editItem-textInput'placeholder='ID'/>

                                <input type='text' name='name' id='name' className='editItem-textInput' placeholder='Nombre'/>

                                <input type='text' name='brand' id='brand' className='editItem-textInput' placeholder='Marca'/>

                            
                                <input type='text' name='price' id='price' className='editItem-textInput' placeholder='Precio'/>
                        </div>
                            

                            
                        
                    </div>
                    
                    
                    <button className='editItem-sendChangesBtn'>Confirmar</button>

                </form>
                }
                
                <div className="pieza-buttons">
                    {!editItem ?
                    <>
                        <button className="pieza-editItemBtn" onClick={()=>{
                            setEditItem(true);
                        }}>Editar</button>
                        <button className="pieza-deleteBtn" onClick={()=>deleteItem}>Eliminar</button>
                    </>
                        
                    :
                        <button className="pieza-editItemBtn" onClick={()=>{
                            setEditItem(false);
                        }}>Cancelar</button>
                    }
                    
                    
                </div>

                
            </div>
            
            



            {/* <span>{pieza.nombre}</span>
            <button onClick={() =>onActualizar(pieza.id)}>Actualizar</button>
            <button onClick={() =>onBorrar(pieza.id)}>Borrar</button> */}
        </li>
    )
}