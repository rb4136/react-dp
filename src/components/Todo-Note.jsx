import React from "react";

function ToDoNote(props) {
  function handleClick() {
    props.deleteNote(props.id);
  }

  return (

        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="delete" onClick={handleClick}><i class="fas fa-minus"></i></button>
        </div>

    )
}

export default ToDoNote;
