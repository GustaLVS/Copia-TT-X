import { useEffect, useState, useRef } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"; 
import api from "../../services/api";

export default function Login() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); 

    const inputName = useRef();
    const inputAge = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    async function getUsers() {
        const usersFromApi = await api.get("/usuarios");
        setUsers(usersFromApi.data);
    }

    async function createUsers() {
        await api.post("/usuarios", {
            name: inputName.current.value,
            email: inputEmail.current.value,
            age: inputAge.current.value,
            password: inputPassword.current.value
        });

        getUsers();
    }

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []); 

    return (
        <div className="flex items-center pt-24 flex-col">
            <form className="flex flex-col gap-6 p-8 rounded-lg bg-black text-white w-[500px]">
                <h1 className="text-white text-4xl font-bold mb-4">Criar sua conta</h1>

                <input
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    ref={inputName}
                    className="p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    ref={inputEmail}
                    className="p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    name="idade"
                    type="number"
                    placeholder="Idade"
                    ref={inputAge}
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
                    onClick={createUsers}
                >
                    Avançar
                </button>
            </form>

            
            <div className="mt-4">
                <p className="text-gray-300">
                    Já tem uma conta? 
                    <span 
                        onClick={() => navigate('/logar')} 
                        className="text-blue-500 cursor-pointer hover:underline"
                    >
                        Entre aqui
                    </span>
                </p>
            </div>

            {users.map((user) => (
                <div
                    key={user.id}
                    className="flex justify-between items-center bg-gray-800 w-[400px] p-6 m-4 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300"
                >
                    <div className="text-gray-200">
                        <p className="font-semibold text-lg">Nome: {user.name}</p>
                        <p className="text-sm">
                            <span className="font-bold">Idade:</span> {user.age}
                        </p>
                        <p className="text-sm">
                            <span className="font-bold">Email:</span> {user.email}
                        </p>
                    </div>
                    <button
                        className="ml-4 p-2 rounded-md bg-red-600 hover:bg-red-700 transition duration-300"
                        onClick={() => deleteUsers(user.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} className="text-white" />
                    </button>
                </div>
            ))}
        </div>
    );
}
