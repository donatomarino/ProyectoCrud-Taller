// Jaime / 16-12-2024 / Formulario del login / 1.0.0
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import Encargado from "./pages/Encargado";
import Mecanico from "./pages/Mecanico";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/encargado" element={<Encargado type='encargado'/>} />
        <Route path="/" element={
          <div class="container">
            <Login />
          </div>
        } />
        <Route path="/register" element={
          <div class="container">
            <Register />
          </div>
        } />

<       Route path="/mecanico" element={
          <div class="container">
            <Mecanico type='mecanico'/>
          </div>
        } />  
    </Routes>


    </BrowserRouter>
  );
}

export default App;