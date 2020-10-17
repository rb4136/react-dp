import React from "react";



function Add(props) {
  const addOne = parseInt(props.numberOne);
  const addTwo = parseInt(props.numberTwo);

  const sum = addOne + addTwo;

  return (
    <div>
      <h3>{sum}</h3>
    </div>
  )
};

export default Add;
