// Jaime / 16-12-2024 / Formulario del login / 1.0.0
// Rafa / 19-12-2024 / Limpiando código / 1.0.0

import Login from "./components/login/Login"
import Encargado from "./pages/Encargado";
import Mecanico from "./pages/Mecanico";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <div class="container">
            <Login />
          </div> } 
        />

        <Route path="/encargado" element={<Encargado type='encargado'/>} />

        <Route path="/mecanico" element={<Mecanico type='mecanico'/>} /> 

      </Routes>

    </BrowserRouter>
  );
}

export default App;