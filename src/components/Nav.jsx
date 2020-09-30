import React, {useState} from "react";

function Nav(props) {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <button className="navbar-items" onClick={() => props.onClick("Home")}>Home</button>
        </div>
        <div className="col">
          <button className="navbar-items" onClick={() => props.onClick("P1")}>Project 1</button>
        </div>
        <div className="col navbar-items">Project 2</div>
        <div className="col navbar-items">Project 3</div>
        <div className="col navbar-items">Project 4</div>
      </div>
    </div>
  )
};

export default Nav;
