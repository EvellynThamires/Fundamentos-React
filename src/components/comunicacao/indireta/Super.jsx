import React, { useState } from 'react'
import Sub from './Sub'

//useState possibilita alterar os valores que são apenas leitura.
export default (props) => {

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('Valor')
    
    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado)
        setTexto(texto) //Quando for clicado em "alterar", aparece o texto que vem de sub.
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}