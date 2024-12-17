import React, {useState} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import BuscarPiezas from "../components/BuscarPiezas"
import PiezaItem from "../components/PiezaItem"
import ListaSolicitudes from "../components/ListaSolicitudes"
import FormularioAgregarPieza from "../components/FormularioAgregarPieza"
import "../styles/Encargado.css"

const Encargado = ()=>{
    const [piezas, setPiezas] = useState([]);
  const [solicitudes] = useState(["Incidencia de prueba"]);
  const [busqueda, setBusqueda] = useState("");


  /*Aquí tendría que solicitar las piezas de la base de datos*/
  const agregarPieza = (pieza) => setPiezas([...piezas, pieza]);
  const borrarPieza = (id) => setPiezas(piezas.filter((pieza) => pieza.id !== id));
  const actualizarPieza = (id) => alert(`Actualizar pieza con ID: ${id}`);
  /*---------------------------------------------------------*/
  const piezasFiltradas = piezas.filter((pieza) =>
    pieza.nombre?.toLowerCase().includes(busqueda.toLowerCase())
  );
    return (
        <div className="parent">
            <Header />
            <main className="main-content">
                <div className="div2">
                    <BuscarPiezas onBuscar={setBusqueda} />
                    {piezasFiltradas.map((pieza) => (
                      <PiezaItem
                        key={pieza.id}
                        pieza={pieza}
                        onActualizar={actualizarPieza}
                        onBorrar={borrarPieza}
                      />
                    ))}
                  </div>
                  <div className="div3">
                    <ListaSolicitudes solicitudes={solicitudes} />
                  </div>
                  <div className="div4">
                    <FormularioAgregarPieza onAgregar={agregarPieza} />
                  </div>
            </main>
            <Footer />
          
        </div>
      );
    };


export default Encargado;