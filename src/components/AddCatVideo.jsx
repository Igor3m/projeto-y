import './AddCatVideo.css'
import React, { useState } from 'react'

import ModalCategoria from './ModalCategoria';
import ModalVideo from './ModalVideo';

const AddCatVideo = () => {

    const [modalC, setModalCategoria] = useState(false);
    const [modalV, setModalVideo] = useState(false);

    return (
        <div className="addCatVideo">

            <button className='btn'
            onClick={() => setModalCategoria(true)}>+ Categoria</button>
            {modalC ? <ModalCategoria onClose={() => setModalCategoria(false)}/> : null}
            <button className='btn'
            onClick={() => setModalVideo(true)}>+ Vídeo</button>
            {modalV ? <ModalVideo onClose={() => setModalVideo(false)}/> : null}

        </div>
    )
}

export default AddCatVideo