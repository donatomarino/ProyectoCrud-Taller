// Rafa / 18-12-2024 / Adaptando algunos contenedores para dar estilo / 1.0.0

import React, {useState} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import BuscarPiezas from "../components/BuscarPiezas"
import PiezaItem from "../components/PiezaItem"
import ListaSolicitudes from "../components/ListaSolicitudes"
import FormularioAgregarPieza from "../components/FormularioAgregarPieza"
import FormAddSolicitud from '../components/FormAddSolicitud';

const Mecanico = ()=>{
    const [piezas, setPiezas] = useState([]);
    const [solicitudes] = useState(["Incidencia de prueba"]);
    const [busqueda, setBusqueda] = useState("");


  /*Aquí tendría que solicitar las piezas de la base de datos*/
  // const agregarPieza = (pieza) => setPiezas([...piezas, pieza]);
  // const borrarPieza = (id) => setPiezas(piezas.filter((pieza) => pieza.id !== id));
  // const actualizarPieza = (id) => alert(`Actualizar pieza con ID: ${id}`);
  /*---------------------------------------------------------*/
  // const piezasFiltradas = piezas.filter((pieza) =>
  //   pieza.nombre?.toLowerCase().includes(busqueda.toLowerCase())
  // );

  /*Estado para manejar la informaciómn de una nueva pieza*/
    const [nuevaPieza, setNuevaPieza] = useState({
      id: "",
      tipo: "",
      marca: "",
      precio_compra: "",
      precio_venta: "",
    });
  
    // /* Manejar el cambio en los campos del formulario */
    // const handleChange = (e) => {
    //   setNuevaPieza({
    //     ...nuevaPieza,
    //     [e.target.name]: e.target.value,
    //   });
    // };


    useState(()=>{
    /* Manejar el envío del formulario */
    const getItems = async (e) => {
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

    getItems();

    },[])

    return (
        <>
            <Header title='AREA DE MECÁNICOS'/>
            <main className="App-main">
                <div className="main-leftContainer">
                    <BuscarPiezas onBuscar={setBusqueda} />
                    <h3 className="listaPiezas-title">Listado de herramientas</h3>
                    <ul className="listaPiezas-container">
                      {piezas.map((pieza, i) => (
                        <PiezaItem
                          key={i}
                          pieza={pieza}
                          // onActualizar={actualizarPieza}
                          // onBorrar={borrarPieza}
                        />
                      ))}
                    </ul>
                    
                </div>
                
                <div className="main-rightContainer-up">
                    {/* <FormAddSolicitud/> */}
                    {/* <ListaSolicitudes solicitudes={solicitudes} /> */}

                    <form  className="addPieza-form">
                        {/* const newIncidence = {
                            tipo: req.body.tipo,
                            titulo: req.body.titulo,
                            descripcion: req.body.descripcion,
                            resuelta: "false",
                        }; */}
                        <h3 className="addPieza-title">Añadir Nueva Pieza</h3>

                        <input
                        name="tipo"
                        placeholder="Tipo"
                        className="addPieza-textInput"
                        />

                        <input
                        name="titulo"
                        placeholder="Título"
                        className="addPieza-textInput"
                        />

                        <textarea
                        name="descripcion"
                        placeholder="Descripción"
                        className="addPieza-textInput"
                        />
                        
                        <select name="solicitudOIncidencia">
                            <option>
                                Solicitud
                            </option>
                            <option>
                                Incidencia
                            </option>
                        </select>
                        

                        <button type="submit" className="addPieza-submitBtn">AÑADIR</button>
                    </form>

                </div>
            </main>
            <Footer />
          
        </>
      );
    };


export default Mecanico;