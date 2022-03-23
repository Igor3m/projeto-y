import './Cadastro.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cadastro = () => {

    const [email,setEmail] = useState("")

    return (
        <div className="Cadastro">
            <div>
                <h2><strong>Esqueceu sua senha?</strong></h2>
                <h3>Informe seu email e aguarde! <br/> 
                Vamos enviar as instruções para recuperar sua senha.</h3>
                <label htmlFor="email">E-mail: </label>
                <input type="text"
                value={email} onChange={e => setEmail(e.target.value)}/>
                <span>{email}</span>
                <button>Recuperar senha</button>
                <p><Link className="link" to="/login">Retornar para o login</Link></p>

            </div>
        </div>
    )
}

export default Cadastro
//verificar pq não estou conseguindo diminuir o tamanho do input e do button