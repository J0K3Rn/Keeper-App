import React, { useId, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

        const [newNote, setNewNote] = useState({
            title: "",
            content: ""
        });
        const [isExpanded, setExpanded] = useState(false);


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

    function expand(){
        setExpanded(true)
    }


  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} value={newNote.title} name="title" placeholder="Title" /> : null}
        <textarea onChange={handleChange} onClick={expand} value={newNote.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;