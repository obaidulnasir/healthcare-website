import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Services from "./components/Services/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Footer from "./components/Footer/Footer";
import OurTeam from "./components/OurTeam/OurTeam";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/service">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/doctors">
              <OurTeam></OurTeam>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
