import React from "react";

function ToDoForm() {
  return (
    <div>
      <form className="create-note">
        <input type="text" placeholder="Add Title" />
        <textarea placeholder="Add Note" />
      </form>
    </div>
  )
}

export default ToDoForm;
