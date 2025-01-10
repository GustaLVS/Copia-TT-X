import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./index.css";
import App from "./pages/home/App"; 
import Login from "./pages/Cadastro/Login"; 
import Logar from "./pages/Cadastro/Logar"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/logar" element={<Logar />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);