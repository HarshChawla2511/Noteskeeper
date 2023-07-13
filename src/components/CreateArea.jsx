import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    
    const [note,setNote] = useState({
        title: "",
        content : ""
    });

    function handleChange(event){
        const {name,value} = event.target;  
        
        setNote(prevNote => {  //pehleka renders react keeps track of.
            return {
                ...prevNote,
                [name] : value  //We cannot use event.target.name/ event inside the set state,Also sirf name if we use it will onsider it as string and not upar  wala name, so we have to use array brackets.
            }
        })
    }

    function submitNote(event){
        props.onAdd(note); //onAdd ko yahase call kro and me ye pass krdo thikee naa
        setNote({
          title: "",
          content: "",
        });
        event.preventDefault(); // Default jo btn click krnepe page refres hota wo nai hoga
        
    }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom  in = {true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
