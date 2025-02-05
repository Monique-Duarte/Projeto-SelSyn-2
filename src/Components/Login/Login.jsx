import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login2.css";


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
    if (username === "admin" && password === "1234") {
        navigate("/bem-vindo");
    } else {
        alert("Credenciais inválidas!");
    }
    };

    return (
    <div className="container">
            <form onSubmit={handleLogin}>
            <div>
                <h1>Acesse o Sistema</h1>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Login" required onChange={(e) => setUsername(e.target.value)} /> <FaUser className="icon"/> 
            </div>
            <div className="input-field">
                <input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} /> <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                <label>
                <input type="checkbox" /> Lembre de mim 
                </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
            <button>Acessar</button>
            </form>
    </div>
    );
};

export default Login;