// Carlos / 17-12-2024 / Header para la página Encargado / 1.0.0
// Rafa / 17-12-2024 / Addicción de logo / 1.0.0

import React from "react"
import taller_logo from '../assets/img/taller_logo.svg';


export default function Header( {title} ){
    return(
        <header className="App-header">
            <div className="AppHeader-brand">
                <h1 className="AppHeader-text">{title}</h1>
                <img src={taller_logo} alt="Logo Taller" className="AppHeader-logo"/>
            </div>
            
        </header>
    )
}