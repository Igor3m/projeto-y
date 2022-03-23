//import './App.css'
import React from 'react'
import ContentStart from '../components/ContentStart'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootswatch/dist/darkly/bootstrap.css'

function App() {

    return (
        <div className="App">
            <Router>
            <ContentStart></ContentStart>
            </Router>
        </div>
    )

}

export default App
