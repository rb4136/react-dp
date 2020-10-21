import React, {useState} from "react";

function ToDoForm(props) {

  const [note, setNote] = useState([{title: "", content: ""}]);
  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  };

  function write() {
    setIsClicked(true);
  }

  function setClick(event) {
    props.addNote(note);
    setIsClicked(false);
    setNote({title: "", content: ""});
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {isClicked && <input
          type="text"
          placeholder="Title Me"
          name="title"
          onChange={handleChange}
          value={note.title}
        />}
        <textarea
          placeholder="Write your note here..."
          name="content"
          onChange={handleChange}
          onClick={write}
          value={note.content}
          rows={!isClicked ? "1" : "3"}
        />
        <button
          type="submit"
          onClick={setClick}>
          <i class="fas fa-plus"></i>
        </button>
      </form>
    </div>
  )
}

export default ToDoForm;
