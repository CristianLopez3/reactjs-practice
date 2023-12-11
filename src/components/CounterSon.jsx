import { memo } from 'react';


function CounterSon({counter, add, subtract}) {

    console.log("Counter son renderize");


    return ( 
        <div style={{border: "1px solid #000", padding:"1rem"}}>
            <h2>Counter's Son</h2>
            <h4>{counter}</h4>
            <nav>
                <button onClick={add}>+</button>
                <button  onClick={subtract}>-</button>
            </nav>
        </div>
     );
}

export default memo(CounterSon);