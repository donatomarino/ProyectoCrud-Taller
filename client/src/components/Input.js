// Jaime / 16-12-2024 / Inputs para el login / 1.0.0

import React from "react";

const Input = ({ tag, placeholder, type, name, value, onChange }) => {
    switch (tag) {
        case "input":
            return (
                <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className="addPieza-textInput" required />
            )
        case "radio":
            return (
                <div>
                    <input type={type} id='admin' name='rol' value="Encargado" />
                    <label for="admin">Encargado</label>
                    <input type={type} id='employed' name='rol' value="Mecanico" />
                    <label for="employed">Mecánico</label>
                </div>
            )
        case "radio2":
            return (
                <div>
                    <input type={type} id='show' name='visible' value="true" />
                    <label for="show">Visible</label>
                    <input type={type} id='hidden' name='visible' value="false" />
                    <label for="hidden">Oculto</label>
                </div>
            )
        case "button":
            return (
                <button type={type} className="addPieza-submitBtn login-submit" >{placeholder}</button>
            )
        default:
            return (
                <div>
                    <h3>No hay elemento Input</h3>
                </div>
            )
    }
}

export default Input;