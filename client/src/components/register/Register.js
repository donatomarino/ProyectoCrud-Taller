// Jaime / 16-12-2024 / Formulario para el login / 1.0.0
import Input from "../Input";

export default function Register() {
    return(
        <form action="http://127.0.0.1:3001/register" method="POST">
            <div class="form-group">
                <Input tag="input" placeholder="First Nme" type="text" name="first_name"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Lastname" type="text" name="last_name"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Email" type="email" name="email"/>
            </div>

            <div class="form-group">
                <Input tag="radio" type="radio" />
            </div>
            <Input tag="button" type="submit" placeholder="Register" />
        </form>
    )
}