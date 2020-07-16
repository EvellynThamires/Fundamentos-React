import React from 'react'

//Props é o padrão para parâmetro.
//Pode-se passar operações dentro de {} que ele interpreta como JS.
export default props => 
    // props é somente leitura, não podendo ser modificado.
    // props.titulo = 'Outro título'
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>