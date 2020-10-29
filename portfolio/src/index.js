import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App.js';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Demos from './pages/Demos';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <NavBar targets={{demos: "/Demos", projects: "/Projects", assignments: "/Assignments"}}/>

    <Switch>
      <Route exact route={["/Home"]}>
        <Home />
      </Route>
      <Route exact route="/Demos">
        <Demos />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
