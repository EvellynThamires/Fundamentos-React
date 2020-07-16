import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

//Ele vai renderizar no elemento com ID "root".
//Dentro de APP contém todo o conteúdo.
ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)