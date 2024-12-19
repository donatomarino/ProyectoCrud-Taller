// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0
// Rafa / 19-12-2024 / Limpiando código y comentando / 1.0.0

import React, {useState} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import BuscarPiezas from "../components/BuscarPiezas"
import PiezaItem from "../components/PiezaItem"
import FormAddSolicitud from '../components/FormAddSolicitud';
import FormIncidencia from "../components/FormIncidencia";

const Mecanico = ()=>{

    //Estado que almacena el listado de piezas
    const [piezas, setPiezas] = useState([]);

    //Al cargar el componente -> solicitud de lista 
    useState(()=>{

    /* Manejar el envío del formulario */
    const getItems = async (e) => {
      try {
        // Enviar los datos al servidor
        const response = await fetch("http://127.0.0.1:3001/all-items");
        // Manejar la respuesta del servidor
        if (response.ok) {
          const data = await response.json();
          setPiezas(await data.data);
        } else {
          console.error("Error al mostrar piezaas", response.statusText);
        }
      } catch (error) {
        console.error("Error al mostrar piezas:", error);
      }
    };

    getItems();

    },[])

    return (
        <>
            <Header title='AREA DE MECÁNICOS'/>
            <main className="App-main">
                <div className="main-leftContainer">
                    <BuscarPiezas/>
                    <h3 className="listaPiezas-title">Listado de herramientas</h3>
                    <ul className="listaPiezas-container">
                      {piezas.map((pieza, i) => (
                        pieza.visible === "true" &&
                        <PiezaItem
                          key={i}
                          pieza={pieza}
                        />
                      ))}
                    </ul>
                    
                </div>

                <section className="main-rightContainer">
                  <div className="main-rightContainer-up">
                    <FormIncidencia/>
                  </div>
                  <div className="main-rightContainer-down">
                    <FormAddSolicitud/>
                  </div>
                </section>
            </main>
            <Footer />
          
        </>
      );
    };


export default Mecanico;