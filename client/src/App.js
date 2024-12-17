// Jaime / 16-12-2024 / Formulario del login / 1.0.0
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import CreateTool from "./components/tool/CreateTool";
import Encargado from "./pages/Encargado";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Encargado/>} />
        <Route path="/login" element={
          <div class="container">
            <h2>LOGIN</h2>
            <Login />
          </div>
        } />
        <Route path="/register" element={
          <div class="container">
            <h2>REGISTER</h2>
            <Register />
          </div>
        } />
        <Route path="/create-tool" element={
          <div class="container">
            <h2>CREAR HERRAMIENTA</h2>
            <CreateTool />
          </div>
        } />
    </Routes>


    </BrowserRouter>
  );
}

export default App;