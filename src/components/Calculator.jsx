import React, {useState} from "react";
import CalcForm from "./Calc-Form";
import Add from "./Calc-Add";
import Sub from "./Calc-Sub";
import Mult from "./Calc-Mult";
import Div from "./Calc-Div";

function Calculator(props) {
  const [numberOne, changeNumberOne] = useState(0);
  const [numberTwo, changeNumberTwo] = useState(0);
  const [calcClick, setCalcClick] = useState(false);

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

  function handleSubmit() {
    setCalcClick(true);

  }

  return (
    <div className="home">
      <div>
        <p>Please enter two whole integers into the boxes below.</p>
        <CalcForm updateNum1={updateNum1} updateNum2={updateNum2} setCalcClick={setCalcClick} handleSubmit={handleSubmit} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 add calc-sec">
              <h1>➕</h1>
              <h2>{calcClick && <Add numberOne={numberOne} numberTwo={numberTwo} />}</h2>
            </div>
            <div className="col-3 calc-sec">
              <h1>➖</h1>
              <h2>{calcClick && <Sub numberOne={numberOne} numberTwo={numberTwo} />}</h2>
            </div>
            <div className="col-3 add calc-sec">
              <h1>✖</h1>
              <h2>{calcClick && <Mult numberOne={numberOne} numberTwo={numberTwo} />}</h2>
            </div>
            <div className="col-3 calc-sec">
              <h1>➗</h1>
              <h2>{calcClick && <Div numberOne={numberOne} numberTwo={numberTwo} />}</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

};

export default Calculator;
