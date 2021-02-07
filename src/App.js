import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Frame from "./Components/Frame";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/frame" component={Frame} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
