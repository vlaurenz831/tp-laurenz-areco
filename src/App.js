import React from "react";
import "./css/styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Movies from "./Screens/Movies/Movies";
import Series from "./Screens/Series/Series";
import Register from "./Screens/Register/Register"
import Login from "./Screens/Login/Login";
import Results from "./Screens/Results/Results";
import Movie from "./Screens/Movie/Movie";
import Serie from "./Screens/Serie/Serie";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Movies" component={Movies} />
      <Route path="/detalleMovie/:id" component={Movie} />
      <Route path="/detalleSerie/:id" component={Serie} />
      <Route path="/Series" component={Series} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/search/:query" component={Results} />
    </Switch>
  );
}

export default App;