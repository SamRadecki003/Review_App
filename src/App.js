import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import IndividualReview from "./components/IndividualReview";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:reviewId" component={IndividualReview} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
