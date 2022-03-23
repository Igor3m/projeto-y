import './ModalCategoria.css'
import React from 'react'

const ModalCategoria = ({onClose = () => {}}) => {

    return (
        <div className="ModalCategoria">
            <div className="Container">
                <div className="header">
                <button className="Close" onClick={onClose}></button>
                <h1 className="title">Adicionar categoria</h1>
                </div>
                <div className="body">
                    <label htmlFor="categoria" className="label">Insira o nome da categoria: </label>
                    <input type="text" className="input-ModalCategoria" />
                </div>
                <div className="foot">
                    <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    <button className="btn-add">Adicionar</button>
                </div>
            
                
            </div>
        </div>
    )

}

export default ModalCategoria