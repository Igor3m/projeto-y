import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PagLogin from '../views/pages/PagLogin'
import PagCadastro from '../views/pages/PagCadastro'
import PagMenu from '../views/pages/PageMenu'


const ContentStart = () => {
    return (
        <main className="ContentStart">
            <Switch>
                <Route path="/login">
                    <PagLogin></PagLogin>
                </Route>
                <Route path="/cadastro">
                    <PagCadastro></PagCadastro>
                </Route>
                <Route path="/menu">
                    <PagMenu></PagMenu>
                </Route>
            </Switch>
        </main>
    )
}

export default ContentStart