import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const entrar = () => {
        axios.post("http://localhost:8080/api/usuarios/autenticar", {
            email: email,
            senha: senha
        }).then( response => {
            alert("Deu Bom")
            console.log(response)
        }).catch( erro => {
            alert("Deu Ruim")
            console.log(erro.response)
        })
    }


    return (
        <div className="Login">
            <form action="" className="Formulario">
                <div>
                    <label htmlFor="email" className="Label">E-mail: </label>
                    <input type="text" className="input"
                    value={email} onChange={e => setEmail(e.target.value)} />
                    <span className="span">{email}</span>
                </div>
                <div>
                    <label htmlFor="senha" className="Label">Senha: </label>
                    <input type="text" className="input"
                    value={senha} onChange={e => setSenha(e.target.value)} />
                    <span className="span">{senha}</span>
                </div>

                <div>
                    <button onClick={entrar} className="btn-login">Entrar</button>
                    
                </div>
                <div>
                <p className="paragrafo">Não tem uma conta? <Link className='link' to="/cadastro">cadastre-se</Link></p>
                <p className="paragrafo">Esqueci minha senha</p>
                </div>
            </form>        
        </div>
    )
}
/*<Link to="/cadastro">cadastre-se</Link>*/
export default Login