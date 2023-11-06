import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Contact from "./pages/Contac";
import Error404 from "./pages/Error404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Old Routes</h1>

      <Router>
        <Switch>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/acerca">
            <h2>Acerca</h2>
          </Route>

          <Route exact path="/">
            <h2>Home</h2>
          </Route>

          <Route exact path="*" Component={Error404} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
