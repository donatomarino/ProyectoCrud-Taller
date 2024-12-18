// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import React, {useState} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import BuscarPiezas from "../components/BuscarPiezas"
import PiezaItem from "../components/PiezaItem"
import ListaSolicitudes from "../components/ListaSolicitudes"
import FormularioAgregarPieza from "../components/FormularioAgregarPieza"

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

    useState(()=>{
    /* Manejar el envío del formulario */
    const handleSubmit = async (e) => {
      try {
        // Enviar los datos al servidor
        const response = await fetch("http://127.0.0.1:3001/all-items");


        // Manejar la respuesta del servidor
        if (response.ok) {
          const data = await response.json();

          console.log("Listado Mostrándose", data);
          setPiezas(data);

        } else {
          console.error("Error al mostrar piezaas", response.statusText);
        }
      } catch (error) {
        console.error("Error al mostrar piezas:", error);
      }
    };

    handleSubmit();

    },[])

    return (
        <>
            <Header title='AREA DE ENCARGADO'/>
            <main className="App-main">
                <div className="main-leftContainer">
                    <BuscarPiezas onBuscar={setBusqueda} />
                    <h3 className="listaPiezas-title">Listado de piezas</h3>
                    <ul className="listaPiezas-container">
                      {piezas.map((pieza, i) => (
                        <PiezaItem
                          key={i}
                          pieza={pieza}
                          onActualizar={actualizarPieza}
                          onBorrar={borrarPieza}
                        />
                      ))}
                    </ul>
                    
                </div>
                <div className="main-rightContainer-up">
                    <ListaSolicitudes solicitudes={solicitudes} />
                </div>
                <div className="main-rightContainer-down">
                    <FormularioAgregarPieza onAgregar={agregarPieza} />
                </div>
            </main>
            <Footer />
          
        </>
      );
    };


export default Encargado;