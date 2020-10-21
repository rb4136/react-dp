import React, {useState} from "react";
import ToDoForm from "./Todo-Form";
import ToDoNote from "./Todo-Note";

function Todo() {

  const [allNotes, setNotes] = useState([]);


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        newNote
      ];
    });
  };

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <ToDoForm addNote={addNote} />
      {allNotes.map((eachNote, index) => {
        return (<ToDoNote
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          deleteNote={deleteNote}
        />
      )})}
    </div>
  )
}

export default Todo;
