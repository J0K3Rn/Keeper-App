import React, { useId, useState } from "react";

function CreateArea(props) {

        const [newNote, setNewNote] = useState({
            title: "",
            content: ""
        });


    function handleChange(event) {
        const {name, value} = event.target;
        //newNote.content = newValue;
        setNewNote(prevNote => { return {...prevNote, [name]: value}});
    }

    function submitNote(event) {
        event.preventDefault();
        props.addNote(newNote);
        setNewNote({title: "", content: ""});
    }


  return (
    <div>
      <form>
        <input onChange={handleChange} value={newNote.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={newNote.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;