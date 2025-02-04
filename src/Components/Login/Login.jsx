import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "admin" && password === "1234") {
        alert("Bem Vindo");
        } else {
        alert("Credenciais inválidas!");
        }
    };

    return (
    <div className="container">
        <h1>Acesse o Sistema</h1>
        <form onSubmit = {handleLogin}>
            <div>
                <input type="name" placeholder='Login' required onChange = {(e) => setUsername(e.target.value)}/>
                <FaUser className='icon'/>
            </div>
            <div>
                <input type="password" placeholder='Senha'required onChange = {(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
        <button>Acessar</button>
        </form>
    </div>
    )
}

export default Login
