
import './App.css';

function App() {
  let resultado='';
  function consolaValor(valor){
    resultado = resultado + valor;
    console.log(`${resultado}`)
  }
  function evaluation(){
    resultado = eval(resultado);
    console.log(`${resultado}`)
  }
  return (
    <table>
    <tr>
      <td ><button id="result">{resultado}</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{consolaValor(1)}} >1</button></td>
      <td><button onClick={()=>{consolaValor(2)}} >2</button></td>
      <td><button onClick={()=>{consolaValor(3)}} >3</button></td>
      <td><button onClick={()=>{consolaValor('+')}} >+</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{consolaValor(4)}} >4</button></td>
      <td><button onClick={()=>{consolaValor(5)}} >5</button></td>
      <td><button onClick={()=>{consolaValor(6)}} >6</button></td>
      <td><button onClick={()=>{consolaValor('-')}} >-</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{consolaValor(7)}} >7</button></td>
      <td><button onClick={()=>{consolaValor(8)}} >8</button></td>
      <td><button onClick={()=>{consolaValor(9)}} >9</button></td>
      <td><button onClick={()=>{consolaValor('*')}} >*</button></td>
    </tr>
    <tr>
      <td  id = 'b0'><button onClick={()=>{consolaValor(0)}}>0</button></td>
      <td  id = 'bdiv'><button onClick={()=>{consolaValor('/')}}>/</button></td>          
    </tr>
    <tr>
      <td ><button onClick={()=>{}} className="AC">AC</button></td>
      <td><button onClick={()=>{consolaValor('.')}}>.</button></td>
      <td><button onClick={()=>{evaluation()}}>=</button></td>          
    </tr>
  </table>
  );
}

export default App;
