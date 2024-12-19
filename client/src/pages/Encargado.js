// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0
// Rafa / 19-12-2024 / Limpiando código y comentando / 1.0.0

import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import BuscarPiezas from "../components/BuscarPiezas"
import PiezaItem from "../components/PiezaItem"
import ListaSolicitudes from "../components/ListaSolicitudes"
import FormularioAgregarPieza from "../components/FormularioAgregarPieza"
import ListaIncidencias from "../components/ListaIncidencias";

const Encargado = ( { type })=>{

    //Estado que almacena el listado de piezas
    const [piezas, setPiezas] = useState([]);

    //Al cargar el componente -> solicitud de lista 
    useEffect(()=>{
    /* Manejar el envío del formulario */
    const handleSubmit = async (e) => {
      try {
        // Enviar los datos al servidor
        const response = await fetch("http://127.0.0.1:3001/all-items");

        // Manejar la respuesta del servidor
        if (response.ok) {
          const data = await response.json();

          console.log("Listado Mostrándose", data);
          setPiezas(await data.data);

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
                    <BuscarPiezas type= 'encargado'/>
                    <h3 className="listaPiezas-title">Listado de herramientas</h3>
                    <ul className="listaPiezas-container">
                      {piezas.map((pieza, i) => (
                        pieza.visible === "true" &&
                        <PiezaItem
                          key={i}
                          pieza={pieza}
                          id={pieza.id}
                          type= 'encargado'
                        />
                      ))}
                    </ul>
                    
                </div>
                <div className="main-rightContainer-up">
                    <ListaSolicitudes/>
                    
                </div>
                <div className="main-rightContainer-middle">
                    <ListaIncidencias/>
                </div>
                <div className="main-rightContainer-down">
                    <FormularioAgregarPieza piezas={piezas.length}/>
                </div>
            </main>
            <Footer />
          
        </>
      );
    };


export default Encargado;