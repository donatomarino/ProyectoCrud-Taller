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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Input tag="input" placeholder="ADMIN/USER" type="text" name="email" />
                </div>
                <div className="form-group">
                    <Input tag="input" placeholder="Password" type="password" name="password" />
                </div>
                <div className="form-group">
                    <label>
                        Encargado
                        <Input tag="input" type="radio" name="rol" value="Encargado" />
                    </label>
                    <label>
                        Mecánico
                        <Input tag="input" type="radio" name="rol" value="Mecanico" />
                    </label>
                </div>
                <Input tag="button" type="submit" placeholder="Login" />
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
