import './ModalVideo.css'
import React from 'react'

const ModalVideo = ({onClose = () => {}}) => {

    return (
        <div className="ModalVideo">
            <div className="Container-video">
                <div className="header">
                <button className="Close" onClick={onClose}></button>
                <h1 className="title">Adicionar categoria</h1>

                </div>
                <div className="body-video">
                <label htmlFor="nomeVideo" className="label">Insira o nome do vídeo: </label>
                <input type="text" className="input-ModalCategoria" />
                <label htmlFor="nomeVideo" className="label-2">Selecione a categoria: </label>
                <select name="role" id="cat" className='select'>
                    <option desable select value>Selecione</option>
                </select>

                </div>
                <div className="foot">
                <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    <button className="btn-add">Adicionar</button>

                </div>

            </div>

        </div>
    )
}

export default ModalVideo