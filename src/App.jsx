import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReduxTheory from "./components/ReduxTheory";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={ store }>
      <div>
        <h1>Redux With React</h1>
        <hr />
        <Counter />
        <hr />
        {/* <ReduxTheory /> */}
      </div>
    </Provider>
  );
}

export default App;
