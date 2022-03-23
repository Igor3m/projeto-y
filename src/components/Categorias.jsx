import './Categorias.css'
import React, { useState }from 'react'
import ModalPlayVideo from './ModalPlayVideo';

const Categorias = () => {

    const [modalPv, setModalPv] = useState(false);

    const [active, setActive] = useState(false);
    console.log(active)
    return (
        <div className="Categorias">
            <button className='button' onClick={() => setActive(!active)}
            >Treinamentos Internos</button>
            <nav
            className={`Categorias ${active ? "active" : "inactive"}`}>
                <ul>
                    <li><button className="play"
                    onClick={() => setModalPv(true)}>Treinamentos Internos - 1</button></li>
                    {modalPv ? <ModalPlayVideo/> : null}
                    <li><button className="play">Treinamentos Internos - 2</button></li>
                    <li><button className="play">Treinamentos Internos - 3</button></li>
                </ul>
            </nav>
            <button className='button'>SiCARF</button>
            <button className='button'>SEMAD</button>
            <button className='button'>Imersão</button>
        </div>
    )   
}

export default Categorias