import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Global/Home";
import { BrowserRouter } from "react-router-dom";


function App() {
    document.title = 'The Home-Work Buddy'

  return (
    <div>
        <Home />
    </div>
  );
}

export default App;
