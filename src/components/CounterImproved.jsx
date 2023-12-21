import { useReducer } from "react";
import { counterInit, counterInitialState, counterReducer } from "../reducers/counterReducer";
import { TYPES } from "../actions/counterActions";


const CounterImproved = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState, counterInit);

  const plus = () => dispatch({ type: TYPES.INCREMENT });
  const subtract = () => dispatch({ type: TYPES.DECREMENT });
  const plus5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const subtract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Counter Improved</h2>
      <nav>
        <button onClick={plus}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={plus5} > +5 </button>
        <button onClick={subtract5}> -5 </button>
        <button onClick={reset}> 0 </button>
      </nav>
      <p>{state.counter}</p>
    </div>
  );
};

export default CounterImproved;
