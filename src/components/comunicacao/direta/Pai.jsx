import React from 'react'
import Filho from './Filho'

//...props: Vai pegar as propriedades recebidas e passar para os filhos.
//sobrenome={props.sobrenome}: pegar uma única propriedade e passar para o filho.
export default props => 
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>