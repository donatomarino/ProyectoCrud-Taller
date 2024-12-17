// Jaime / 16-12-2024 / Formulario para el login / 1.0.0
import Input from "../Input";

export default function CreateTool() {
    return(
        <form action="http://127.0.0.1:3001/create-tool" method="POST">
            <div class="form-group">
                <Input tag="input" placeholder="Id" type="number" name="id"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Tipo" type="text" name="tipo"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Marca" type="text" name="marca"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Precio Compra" type="number" name="precio_compra"/>
            </div>

            <div class="form-group">
                <Input tag="input" placeholder="Precio Venta" type="number" name="precio_venta"/>
            </div>
            <Input tag="button" type="submit" placeholder="Crear" />
        </form>
    )
}