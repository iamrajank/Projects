
import { useState } from 'react';
import './App.css';

function App() {

  const[count, setCount] = useState(0);

  function decrementHandler(){
  setCount(count-1);

}

function incrementHandler(){
  setCount(count+1);

}

function resetHandler(){
  setCount(0);

}

  return (
   
      <div className='container'>

        <div className='heading'>Increment & Decrement</div>

        <div className='btn'>

        <button onClick={decrementHandler} className='btn1'>-</button>
        <div className='para'>{count}</div>
        <button onClick={incrementHandler} className='btn2'>+</button>
        

        </div>

        <button onClick={resetHandler} className='btn3'>Reset</button>

      </div>
  
    
  );
}

export default App;
