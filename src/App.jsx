import { useState } from "react";
import "./App.css";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
import SelectAnidados from "./components/SelectAnidados";

function App() {
  return (
    <>
      <h1>Crud with React</h1>
      <hr />
      <SelectAnidados />
      {/* <SongSearch /> */}
      <hr />
      {/* <CrudApi /> */}
      <hr />
      {/* <CrudApp /> */}
      <hr />
    </>
  );
}

export default App;
