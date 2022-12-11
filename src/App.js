
import BotaoCalculadora from './componentes/button.js';
import './styles/calculadora.css';
import React, { useState } from 'react';

function App() {
  let [resultado, setResultado] = useState(' ');

  function adicionaValor(valor) {
    setResultado(resultado + valor);

  }
  function evaluation() {
    setResultado(eval(resultado));

  }

  function apagar() {
    setResultado(' ');

  }
  return (
    <table>
      <tr>
        <td ><button id="result" >{resultado}</button></td>
      </tr>
      <tr>
        <BotaoCalculadora valor='1' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='2' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='3' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='+' onclick={adicionaValor}></BotaoCalculadora>

      </tr>
      <tr>
        <BotaoCalculadora valor='4' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='5' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='6' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='-' onclick={adicionaValor}></BotaoCalculadora>

      </tr>
      <tr>
        <BotaoCalculadora valor='7' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='8' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='9' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='*' onclick={adicionaValor}></BotaoCalculadora>

      </tr>
      <tr>
        <BotaoCalculadora valor='0' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='/' onclick={adicionaValor}></BotaoCalculadora>

      </tr>
      <tr>
        <BotaoCalculadora valor="AC" onclick={apagar} classe="AC"></BotaoCalculadora>
        <BotaoCalculadora valor='.' onclick={adicionaValor}></BotaoCalculadora>
        <BotaoCalculadora valor='=' onclick={evaluation}></BotaoCalculadora>
      </tr>
    </table>
  );
}

export default App;
