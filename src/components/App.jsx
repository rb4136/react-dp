import React, {useState} from "react";
import Nav from "./Nav";
import Home from "./Home";

function App() {

  const [navClick, changeNavClick] = useState("Home");

  function nav(clicked) {
    changeNavClick(clicked);
  }

  return (
  <div className="app-container">
    <h1>React Dev Playground</h1>
    <Nav onClick={nav} />
    {navClick == "Home" && <Home />}
  </div>
)}

export default App;
