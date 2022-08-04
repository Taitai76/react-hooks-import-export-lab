import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import {username, city, image} from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
