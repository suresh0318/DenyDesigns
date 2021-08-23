import "./App.css";
import Home from "./components/home/home"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Header from './components/header/header'
import Cards from "./components/cards/cards"
import Card from "./components/card/card"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
      
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/Cards" exact component={Cards}></Route>
        <Route path="/Card/:id" exact component={Card}></Route>

      </Switch>

      
      
    </Router>
  );
}

export default App;
