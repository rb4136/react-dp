import React from "react";



function Sub(props) {


  const sub = parseInt(props.numberOne) - parseInt(props.numberTwo);

  return (
    <div>
      <h1>{sub}</h1>
    </div>
  )
};

export default Sub;
