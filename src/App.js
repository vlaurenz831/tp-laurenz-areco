import React from "react";
import "./css/styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Movies from "./Screens/Movies/Movies";
import Series from "./Screens/Series/Series";
import Register from "./Screens/Register/Register"
import Login from "./Screens/Login/Login";
import Results from "./Screens/Results/Results";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Movies" component={Movies} />
      <Route path="/Series" component={Series} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/search/:query" component={Results} />
    </Switch>
  );
}

export default App;