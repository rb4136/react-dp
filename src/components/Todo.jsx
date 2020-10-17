import React, {useState} from "react";
import Note from "./Todo-Note";
import ToDoForm from "./Todo-Form";

function Todo() {

  const [notes, setNotes] = useState([]);

  return (
    <div>
      <ToDoForm />

    </div>
  )
}

export default Todo;
