import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { } from 'reactstrap';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import NavBar from "./Components/Nav";
import TopHeader from "./Components/Header";
import Timeline from "./Components/TimeLine";

function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path="/" component={TopHeader}/>
      <Route exact path="/timeline" component={Timeline}/>
      
    </div>
  );
}

export default App;
