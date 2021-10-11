import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login_SignUP from './Pages/Login_SignUP';
import Header from './Pages/Header';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
    <Switch>
      
      <Route exact path="/"  component={Home}/>
      <Route exact path="/login" component={Login_SignUP}/>
      <Route exact path="/signup" component={SignUp}/>

      <Redirect  from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
    </div>
  );
}

export default App;
