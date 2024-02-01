import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Add from "./Components/Add";
import Display from "./Components/Display";
import Update from "./Components/Update";
import Home from "./Components/Home";
import './index.css';
import './App.css';



function App() {
  return (
    
    <div className="App items-center bg-blue-200">
      <BrowserRouter>
        <Routes>
          {/* This is the root route */}
          <Route path="/" element={<Home />} />

          {/* Define a separate route for blogs */}
          <Route path="/Display" element={<Display />} />

          {/* Define a separate route for blogs */}
          <Route path="/Add" element={<Add />} />

          {/* Define a separate route for contact */}
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



