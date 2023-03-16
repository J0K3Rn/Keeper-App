import React, { useState }  from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
//import notes from "./notes.js";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function deleteNote(id) {
        //console.log(id);
        setNotes((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== id;
          });
        });
      }

      function addNote(newNote) {
        //console.log(newNote);
        //const newValue = event.target.value;
        setNotes(prevItems => {
            return [...prevItems, newNote];
          });
      }


  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, index) => <Note key={index} id={index} title={noteItem.title} content={noteItem.content} deleteNote={deleteNote}  />)}
      <Footer />
    </div>
  );
}

export default App;