import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App"> 
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
          </div>
          <div className="col-sm">
              <BrowserRouter>
              <Routes/>
            </BrowserRouter>
          </div>
          <div className="col-sm">
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
