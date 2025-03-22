import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import "./Login.css";

const Login = () => {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const verificar = (event) => {
        event.preventDefault();
        console.log("verificar");
        console.log("Teste", usuario, senha);
    };

  return (
    <div className="container">
        <h1>Acesse o Sistema de Ponto</h1>
        <form onSubmit={verificar}>
            <div>
            <input type="text" placeholder="Digite seu usuário" name="usuario"
            onChange={(e) => setUsuario(e.target.value)} />
            <FaUser className='icon'/>
            </div>

            <div>
            <input type="password" placeholder="Digite sua senha..." name="senha" 
            onChange={(e) => setSenha(e.target.value)}/>
            <FaLock className='icon'/>
            </div>

            <div className="lembrar-usuario">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#"> Você Esqueceu a senha?</a>
            </div>

           <button>Entrar</button>

           <div className="registrar">
            <p>
                Não tem conta? <a href="#">Registrar</a>
            </p>
           </div>

        </form>
    </div>
  )
}

export default Login
