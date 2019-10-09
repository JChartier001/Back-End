import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { } from 'reactstrap';
import { Route } from 'react-router-dom';
import NavBar from "./Components/Nav";
import TopHeader from "./Components/Header";
import LearedLanguage from "./Components/LearedLanguage";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/about" component={TopHeader}/>
      <Route exact path="/about" component={LearedLanguage} /> 
      <Route exact path="/contact" component={Contact} /> 
      <Footer />
      
    </div>
  );
}

export default App;
