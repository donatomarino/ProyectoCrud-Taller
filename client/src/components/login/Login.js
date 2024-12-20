import '../../styles/Login.css';
import { useState } from "react";
import Input from "../Input";

export default function Login() {
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío directo del formulario

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const rol = formData.get("rol");

        try {
            const response = await fetch("http://127.0.0.1:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, rol }),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirige a la URL proporcionada por el servidor
                window.location.href = data.redirectUrl;
            } else {
                // Muestra el mensaje de error en la interfaz
                setError(data.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError("Ocurrió un error al iniciar sesión.");
        }
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h1 className='login-form_title'>LOGIN</h1>
                <div className="form-group">
                    <input tag="input" className='input-login' placeholder="MECÁNICO / ENCARGADO" type="text" name="email" />
                </div>
                <div className="form-group">
                    <input tag="input" className='input-login' placeholder="CONSTRASEÑA" type="password" name="password" />
                </div>
                <div className="form-group-label">
                    <label className='login-label'>
                        Encargado
                        <Input tag="input" type="radio" name="rol" value="Encargado" />
                    </label>
                    <label className='login-label'>
                        Mecánico
                        <Input tag="input" type="radio" name="rol" value="Mecanico" />
                    </label>
                </div>
                <input tag="button" type="submit" placeholder="Login" value='ENVIAR' className="login-submit"/>
                {error && 
                <div className='login-errorPosition'>
                    <div className='login-errorContainer'>
                    <p className="login-error">{error}</p>
                    </div>
                </div>}
            </form>
            
        </div>
    );
}
