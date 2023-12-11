import { useState, useCallback } from 'react';
import CounterSon from './CounterSon';


function Counter() {

    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");   

    // const add =  () => setCounter(counter + 1);
    const add = useCallback(() => setCounter(counter + 1), [counter])

    // const subtract = () => setCounter(counter - 1);
    const subtract = useCallback(() => setCounter(counter - 1), [counter])


    const handleInput = (e) => setInput(e.target.value);

    return ( 
        <>
            <h2>Counter</h2>
            <nav>
                <button onClick={add}>+</button>
                <button  onClick={subtract}>-</button>
            </nav>
            <h3>{counter}</h3>

            <input type="text"  onChange={handleInput} value={input} style={{margin: "1rem"}} />
            <CounterSon counter={counter} add={add} subtract={subtract}  />
        </>
     );
}

export default Counter;