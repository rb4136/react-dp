import React, {useState} from "react";
import Nav from "./Nav";
import Home from "./Home";
import Calculator from "./Calculator";

function App() {

  const [navClick, changeNavClick] = useState("Home");

  function nav(clicked) {
    changeNavClick(clicked);
  }

  return (
  <div className="app-container">
    <h1>React Dev Playground</h1>
    <Nav navSelect={nav} />
    {navClick === "Home" && <Home />}
    {navClick === "Calculator" && <Calculator navSelect={nav} />}
  </div>
)}

export default App;
