import React, {useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Calculator from "./Calculator";
import Emojipedia from "./Emojipedia";
import Weather from "./Weather";
import Todo from "./Todo";

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
    {navClick === "Calculator" && <Calculator />}
    {navClick === "Emojipedia" && <Emojipedia />}
    {navClick === "Weather" && <Weather />}
    {navClick === "To Do List" && <Todo />}
    <Footer />
  </div>
)}

export default App;
