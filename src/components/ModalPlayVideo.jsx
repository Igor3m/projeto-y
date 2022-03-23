import './ModalPlayVideo.css'
import React from 'react'

const ModalPlayVideo = () => {

    return (
        <div className="ModalPlayVideo">
            <div className="ContainerPlayVideo">
                <div className="Video">
                <iframe width="890" height="425" src="https://www.youtube.com/embed/XfO3TRvESBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default ModalPlayVideo