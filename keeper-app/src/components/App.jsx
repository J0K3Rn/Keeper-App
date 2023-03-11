import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />)};
      <Footer />
    </div>
  );
}

export default App;