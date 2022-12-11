
import './App.css';

function App() {
  let resultado=10;
  function consolaValor(valor){
    console.log(valor)
  }
  return (
    <table>
    <tr>
      <td ><button id="result">{resultado}</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{console.log(1)}} >1</button></td>
      <td><button onClick={()=>{console.log(2)}} >2</button></td>
      <td><button onClick={()=>{console.log(3)}} >3</button></td>
      <td><button onClick={()=>{console.log('+')}} >+</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{console.log(4)}} >4</button></td>
      <td><button onClick={()=>{console.log(5)}} >5</button></td>
      <td><button onClick={()=>{console.log(6)}} >6</button></td>
      <td><button onClick={()=>{console.log('-')}} >-</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{console.log(7)}} >7</button></td>
      <td><button onClick={()=>{console.log(8)}} >8</button></td>
      <td><button onClick={()=>{console.log(9)}} >9</button></td>
      <td><button onClick={()=>{console.log('*')}} >*</button></td>
    </tr>
    <tr>
      <td  id = 'b0'><button onClick={()=>{console.log(0)}}>0</button></td>
      <td  id = 'bdiv'><button onClick={()=>{console.log('/')}}>/</button></td>          
    </tr>
    <tr>
      <td ><button onClick={()=>{console.log('AC')}} className="AC">AC</button></td>
      <td><button onClick={()=>{console.log('.')}}>.</button></td>
      <td><button onClick={()=>{console.log('=')}}>=</button></td>          
    </tr>
  </table>
  );
}

export default App;
