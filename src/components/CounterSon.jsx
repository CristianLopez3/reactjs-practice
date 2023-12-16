import { memo, useMemo } from 'react';


function CounterSon({counter, add, subtract}) {
    
    // Relentiza el renderizado de componentes en pantalla.
    // let number = 0;
    // for(let i = 0; i < 100000000; i++){
    //     numberr++;
    // }

    // Memorizamos un valor dado cierto proceso
    const superNumber = useMemo(() => {
        let numero = 0;
        for(let i = 0; i < 100000000; i++){
            numero++;
        }
        return numero; // Valor que queremos memorizar.
    }, [])

    console.log("Counter son renderize");


    return ( 
        <div style={{border: "1px solid #000", padding:"1rem"}}>
            <h2>Counter's Son</h2>
            <h4>{counter}</h4>
            <nav>
                <button onClick={add}>+</button>
                <button  onClick={subtract}>-</button>
            </nav>
            {/* <h3>{renderLate}</h3> */}
            <h3>{superNumber}</h3>
        </div>
     );
}

export default memo(CounterSon);