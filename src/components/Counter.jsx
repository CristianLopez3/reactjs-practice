import {  useReducer } from "react";

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

const initialState = { counter: 0 };
const init = (initialState) => {
  return {
    counter: initialState.counter + 100
  }
}

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { counter: state.counter + 1 };
    case TYPES.INCREMENT_5:
      return { counter: state.counter + action.payload };
    case TYPES.DECREMENT:
      return { counter: state.counter - 1 };
    case TYPES.DECREMENT_5:
      return { counter: state.counter - action.payload }
    case TYPES.RESET:
      return { counter: initialState.counter }
    default:
      return state;
  }
}

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // const [state, dispatch] = useReducer(reducer, initialState, init);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  // const plus = () => setCounter(counter + 1);
  const plus = () => dispatch({ type: TYPES.INCREMENT });
  // const subtract = () => setCounter(counter - 1);
  const subtract = () => dispatch({ type: TYPES.DECREMENT });
  const plus5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const subtract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Counter</h2>
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

export default Counter;
