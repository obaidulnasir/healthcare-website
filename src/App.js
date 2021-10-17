import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
