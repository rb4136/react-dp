import React from "react";

function CalcForm(props) {

  return (
    <form className="form-group">
      <input
        className="calc-input form-control"
        name="num1"
        placeholder="Enter Number 1"
        onChange={props.updateNum1}
        value={props.numberOne}
      />
      <input
        className="calc-input form-control"
        name="num2"
        placeholder="Enter Number 2"
        onChange={props.updateNum2}
        value={props.numberTwo}
      />
      <br />
      <button
        type="submit"
        className="btn btn-outline-secondary calc-btn"
        onClick={props.handleSubmit}>
        Submit
      </button>
    </form>
  )
};

export default CalcForm;
