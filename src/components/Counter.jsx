import { useState, useReducer } from "react";

const initialState = { counter: 0 };
function reducer(state, action){

  switch (action.type) {
    case "INCREMENT":
      return {counter: state.counter + 1};
    case "DECREMENT":
      return {counter: state.counter - 1};
    default:
      return state;
  }
  
}


const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const plus = () => setCounter(counter + 1);
  const plus = () => dispatch({type: "INCREMENT"});
  // const subtract = () => setCounter(counter - 1);
  const subtract = () => dispatch({type: "DECREMENT"});
  

  return (
    <div>
      <h2>Counter</h2>
      <nav>
        <button onClick={plus} >+</button>
        <button onClick={subtract} >-</button>
      </nav>
      <p>{state.counter}</p>
    </div>
  );
};

export default Counter;
