// Carlos / 17-12-2024 / PiezaItem para la página Encargado / 1.0.0

import '../styles/PiezaItem.css';

//Componente para la pieza y los botones para manejar la actulización y delete.
export default function PiezaItem({pieza, onActualizar, onBorrar}){
    return(
        <li className="pieza-item">
            {/* Piezas de ejemplo */}
            <div className="pieza-header">
                <span className="pieza-name">Nombre: Rueda</span>
                <span className="pieza-id">ID: 1</span>
            </div>
            <div className='pieza-body'>
                <div className="pieza-info">
                    <span className="pieza-brand">Marca: Mercedes</span>
                    <span className="pieza-description">Descripción: Aquí iría una descripción del producto en sí.</span>
                    <span className="pieza-price">Precio: 160€</span>
                </div>
                <div className="pieza-buttons">
                    <button className="pieza-getMoreBtn">Solicitar</button>
                    <button className="pieza-deleteBtn">Eliminar</button>
                </div>
            </div>
            
            



            {/* <span>{pieza.nombre}</span>
            <button onClick={() =>onActualizar(pieza.id)}>Actualizar</button>
            <button onClick={() =>onBorrar(pieza.id)}>Borrar</button> */}
        </li>
    )
}