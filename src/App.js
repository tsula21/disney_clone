import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import requests from "./Requests";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home fetchURL={requests.requestUpcoming} />}
          />
          {/* <Route path="/detail" element={<Detail />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="detail/:movieId" element={<Detail />} />
        </Routes>
      </Router>
    </div>
    //10:02
  );
}

export default App;
