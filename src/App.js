import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
          <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
