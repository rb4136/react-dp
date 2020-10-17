import React from "react";



function Sub(props) {


  const sub = parseInt(props.numberOne) - parseInt(props.numberTwo);

  return (
    <div>
      <h3>{sub}</h3>
    </div>
  )
};

export default Sub;
