import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import "./Login.css";

const Login = () => {
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const verificar = (event) => {
        event.preventDefault();
        console.log("verificar");
        console.log(usuario, senha);

        alert ("Enviando os dados...");
    };

  return (
    <>
    <div className="Logo">
        <img src="https://colegioprestesmaia.com.br/wp-content/uploads/2020/12/seu-logo-aqui-1.png" alt="Colegio Prestes Maia" width="150" />
    </div>


    <div className="container">
        <h1>Ponto Online</h1>
        <form onSubmit={verificar}>
            <div className='campo-entrada' >
            <input type="text" placeholder="Digite seu usuário" name="usuario"
            onChange={(e) => setUsuario(e.target.value)} />
            <FaUser className='icon'/>
            </div>
            <div className='campo-entrada'>
            <input type="password" placeholder="Digite sua senha..." name="senha" 
            onChange={(e) => setSenha(e.target.value)}/>
            <FaLock className='icon'/>
            </div>
            <div className="lembrar-usuario">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
           <button>Entrar</button>

           <div className="registrar">
            <p>
                Não tem conta? <a href="#">Registrar</a>
            </p>
           </div>

        </form>
    </div>
</>
  )
}

export default Login
