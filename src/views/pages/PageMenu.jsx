import React from 'react'
import TitleMenu from '../../components/TitleMenu'
import AddCatVideo from '../../components/AddCatVideo'
import Categorias from '../../components/Categorias'

const PagMenu = () => {
    return (
        <div className="PagMenu">
            <TitleMenu></TitleMenu>
            <AddCatVideo></AddCatVideo>
            <Categorias></Categorias>
        </div>
    )
}

export default PagMenu