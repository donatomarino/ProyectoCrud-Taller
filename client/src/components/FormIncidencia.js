// Rafa / 19-12-2024 / Formulario y peticiones http INCIDENCIAS

const FormIncidencia = ()=>{

    //Enviar un nueva incidencia
    const sendIncidencia = async (e)=>{
        e.preventDefault();
        
        const newIncidence = {
            title: e.target[0].value,
            descripcion: e.target[1].value,
            resuelta: "false"
        };

        try {
            // Enviar los datos al servidor
            const response = await fetch("http://127.0.0.1:3001/incidencias", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify(newIncidence),
            });

            // Manejar la respuesta del servidor
            if (response.ok) {
                const data = await response.json();
                console.log("Pieza añadida con éxito:", data);

              // Recargar la página para que se apliquen los cambios
                window.location.href = "/mecanico";

            } else {
                console.error("Error al añadir la pieza:", response.statusText);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }

    return (
        <form onSubmit={(e)=>sendIncidencia(e)} className="addSolicitud-form">

            <h3 className="addPieza-title">Nueva Incidencia</h3>

            <input
            name="titulo"
            placeholder="Título"
            className="addPieza-textInput"
            />

            <textarea
            name="descripcion"
            placeholder="Escribe aquí la descripción de tu incidencia"
            className="addPieza-textArea"
            />

            <button type="submit" className="addPieza-submitBtn">
                AÑADIR
            </button>
        </form>
    )
}

export default FormIncidencia;