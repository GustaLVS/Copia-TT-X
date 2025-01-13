import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import api from "../../services/api"; 

export default function Logar() {
  const navigate = useNavigate();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin() {
    try {
      const response = await api.post("/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });

      if (response.status === 200) {
        
        navigate("/"); 
      }
    } catch (error) {
      setErrorMessage("E-mail ou senha inválidos.");
    }
  }

  return (
    <div className="flex items-center pt-24 flex-col">
      <form
        className="flex flex-col gap-6 p-8 rounded-lg bg-black text-white w-[500px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-4xl font-bold mb-4">
          Entrar no <FontAwesomeIcon icon={faPenNib} />
        </h1>

        <button
          type="button"
          className="flex items-center justify-center gap-3 p-4 rounded bg-gray-800 hover:bg-gray-700 text-white font-bold transition duration-300"
        >
          <FontAwesomeIcon icon={faGoogle} className="size-7" />
          Fazer login com o Google
        </button>

        <div className="flex items-center">
          <hr className="flex-grow border-gray-700" />
          <span className="px-4 text-gray-400">ou</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="E-mail"
          ref={inputEmail}
          className="p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="senha"
          type="password"
          placeholder="Senha"
          ref={inputPassword}
          className="p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          className="mt-4 p-4 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleLogin}
        >
          Avançar
        </button>

        <a
          href="#"
          className="text-sm text-blue-500 hover:underline text-center mt-2"
        >
          Esqueceu sua senha?
        </a>
      </form>

      <div className="text-gray-200 mt-4">
        Não tem uma conta?{" "}
        <a
          href="#"
          className="text-blue-500 hover:underline transition duration-300"
          onClick={() => navigate("/cadastro")}
        >
          Inscreva-se
        </a>
      </div>
    </div>
  );
}
