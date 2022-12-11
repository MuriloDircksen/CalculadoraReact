
import './App.css';

function App() {
  let resultado=10;
  return (
    <table>
    <tr>
      <td colspan="4"><button id="result">{resultado}</button></td>
    </tr>
    <tr>
      <td><button onClick={()=>{console.log(1)}} id = 'b1'>1</button></td>
      <td><button id = 'b2'>2</button></td>
      <td><button id = 'b3'>3</button></td>
      <td><button id = 'bsum'>+</button></td>
    </tr>
    <tr>
      <td><button id = 'b4'>4</button></td>
      <td><button id = 'b5'>5</button></td>
      <td><button id = 'b6'>6</button></td>
      <td><button id = 'bsub'>-</button></td>
    </tr>
    <tr>
      <td><button id = 'b7'>7</button></td>
      <td><button id = 'b8'>8</button></td>
      <td><button id = 'b9'>9</button></td>
      <td><button id = 'bplus'>*</button></td>
    </tr>
    <tr>
      <td  id = 'b0'><button>0</button></td>
      <td  id = 'bdiv'><button>/</button></td>          
    </tr>
    <tr>
      <td ><button class="ac" id = 'bclean'>AC</button></td>
      <td><button id = 'bcoma'>.</button></td>
      <td><button id= 'bequal'>=</button></td>          
    </tr>
  </table>
  );
}

export default App;
