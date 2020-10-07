import React, {useState} from "react";
import Add from "./Calc-Add";
import Sub from "./Calc-Sub";
import Mult from "./Calc-Mult";
import Div from "./Calc-Div";

function Calculator(props) {
  const [numberOne, changeNumberOne] = useState(0);
  const [numberTwo, changeNumberTwo] = useState(0);


  function updateNum1(event) {
    const num1 = event.target.value;
    if (num1 === "") {
      changeNumberOne(0);
    } else {
      changeNumberOne(num1);
    }
  };

  function updateNum2(event) {
    const num2 = event.target.value;
    if (num2 === "") {
      changeNumberTwo(0);
    } else {
      changeNumberTwo(num2);
    }
  };

  return (
    <div className="home">
      <div>
        <p>Please enter two whole integers into the boxes below.</p>
        <form className="form-group">
          <input className="calc-input form-control" name="num1" placeholder="Enter Number 1" onChange={updateNum1} />
          <input className="calc-input form-control" name="num2" placeholder="Enter Number 2" onChange={updateNum2} />
          <br />
        </form>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <h1>Addition</h1>
              <h2><Add numberOne={numberOne} numberTwo={numberTwo} /></h2>
            </div>
            <div className="col-3">
              <h1>Subtraction</h1>
              <h2><Sub numberOne={numberOne} numberTwo={numberTwo} /></h2>
            </div>
            <div className="col-3">
              <h1>Multiplication</h1>
              <h2><Mult numberOne={numberOne} numberTwo={numberTwo} /></h2>
            </div>
            <div className="col-3">
              <h1>Division</h1>
              <h2><Div numberOne={numberOne} numberTwo={numberTwo} /></h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

};

export default Calculator;
