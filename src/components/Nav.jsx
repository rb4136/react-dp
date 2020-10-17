import React from "react";

function Nav(props) {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <button className="navbar-items" onClick={() => props.navSelect("Home")}>Home</button>
        </div>
        <div className="col">
          <button className="navbar-items" onClick={() => props.navSelect("Calculator")}>Calculator</button>
        </div>
        <div className="col">
          <button className="navbar-items" onClick={() => props.navSelect("Emojipedia")}>Emojipedia</button>
        </div>
        <div className="col">
          <button className="navbar-items" onClick={() => props.navSelect("Weather")}>Weather</button>
        </div>
        <div className="col">
          <button className="navbar-items" onClick={() => props.navSelect("To Do List")}>To Do</button>
        </div>
      </div>
    </div>
  )
};

export default Nav;
