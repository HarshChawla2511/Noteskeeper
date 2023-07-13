import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"



function App() {

  const [notes,setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      })
    })
  }
  

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd  = {addNote} //this is prop
      />
      {notes && notes.map((noteItem,index) =>{  //for everynoteItem in note and map being similar to filter you an get index value of the element.
        return (
          <Note 
            key = {index}
            id = {index}
            title = {noteItem.title} 
            content = {noteItem.content} 
            onDelete = {deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
