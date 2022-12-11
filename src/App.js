
import './App.css';
import './styles/calculadora.css'
import React, { useState } from 'react';

function App() {
  let[resultado, setResultado]= useState(' ');
  
  function adicionaValor(valor) {
    setResultado(resultado + valor);
    console.log(`${resultado}`)
  }
  function evaluation() {
   setResultado(eval(resultado));
    console.log(`${resultado}`)
  }

  function apagar() {
   setResultado('');
    console.log(resultado)
  }
  return (
    <table>
      <tr>
        <td ><button id="result" >{resultado}</button></td>
      </tr>
      <tr>
        <td><button onClick={() => { adicionaValor(1) }} >1</button></td>
        <td><button onClick={() => { adicionaValor(2) }} >2</button></td>
        <td><button onClick={() => { adicionaValor(3) }} >3</button></td>
        <td><button onClick={() => { adicionaValor('+') }} >+</button></td>
      </tr>
      <tr>
        <td><button onClick={() => { adicionaValor(4) }} >4</button></td>
        <td><button onClick={() => { adicionaValor(5) }} >5</button></td>
        <td><button onClick={() => { adicionaValor(6) }} >6</button></td>
        <td><button onClick={() => { adicionaValor('-') }} >-</button></td>
      </tr>
      <tr>
        <td><button onClick={() => { adicionaValor(7) }} >7</button></td>
        <td><button onClick={() => { adicionaValor(8) }} >8</button></td>
        <td><button onClick={() => { adicionaValor(9) }} >9</button></td>
        <td><button onClick={() => { adicionaValor('*') }} >*</button></td>
      </tr>
      <tr>
        <td id='b0'><button onClick={() => { adicionaValor(0) }}>0</button></td>
        <td id='bdiv'><button onClick={() => { adicionaValor('/') }}>/</button></td>
      </tr>
      <tr>
        <td ><button onClick={() => { apagar() }} className="AC">AC</button></td>
        <td><button onClick={() => { adicionaValor('.') }}>.</button></td>
        <td><button onClick={() => { evaluation() }}>=</button></td>
      </tr>
    </table>
  );
}

export default App;
