// Jaime / 16-12-2024 / Formulario para el login / 1.0.0
import Input from "../Input";
import '../../styles/Login.css';

export default function Login() {
    return(
        <form action="http://127.0.0.1:3001/login" method="POST">
            <div class="form-group">
                <Input tag="input" placeholder="ADMIN/USER" type="text" name="email"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Password" type="password" name="password"/>
            </div>

            <div class="form-group">
                <Input tag="radio" type="radio" />
            </div>
            <Input tag="button" type="submit" placeholder="Login" />
        </form>
    )
}