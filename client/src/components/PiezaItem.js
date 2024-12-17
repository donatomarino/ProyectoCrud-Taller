// Carlos / 17-12-2024 / PiezaItem para la página Encargado / 1.0.0


//Componente para la pieza y los botones para manejar la actulización y delete.
export default function PiezaItem({pieza, onActualizar, onBorrar}){
    return(
        <div>
            <span>{pieza.nombre}</span>
            <button onClick={() =>onActualizar(pieza.id)}>Actualizar</button>
            <button onClick={() =>onBorrar(pieza.id)}>Borrar</button>
        </div>
    )
}