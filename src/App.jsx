import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega'


//Números dentro de {}
export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Mega" color="#83BF17">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#160A47">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#000">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#DB3340">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#F38630">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional com If" color="#E94C6F">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional com ternário" color="#493621">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Repeticao" color="#542733">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com filhos" color="#35404F">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com parâmetro" color="#6C8672">
                <ComParametro titulo="Esse é o título" 
                subtitulo="Esse é o subtitulo"/>
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#D79C8C">
                <Primeiro/>
            </Card>
        </div>
    </div>
);