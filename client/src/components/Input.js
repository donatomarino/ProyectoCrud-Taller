// Jaime / 16-12-2024 / Inputs para el login / 1.0.0

import React from "react";

const Input = ({ tag, placeholder, type, name }) => {
    switch (tag) {
        case "input":
            return (
                <input type={type} placeholder={placeholder} name={name}/>
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
        case "button":
            return (
                <button type={type}>{placeholder}</button>
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