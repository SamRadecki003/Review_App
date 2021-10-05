import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import IndividualReview from "./components/IndividualReview";
import { ReviewProvider } from "./ReviewContext";

const App = () => {
  return (
    <Router>
      test1
      <ReviewProvider>
        <div>
          test2
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:reviewId" component={IndividualReview} />
            </Switch>
          </main>
        </div>
      </ReviewProvider>
    </Router>
  );
};

export default App;
