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
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
    </>
  );
}

export default App;
