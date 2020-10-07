import React from "react";



function Add(props) {


  const sum = parseInt(props.numberOne) + parseInt(props.numberTwo);

  return (
    <div>
      <h1>{sum}</h1>
    </div>
  )
};

export default Add;
