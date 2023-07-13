import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
<<<<<<< HEAD
<<<<<<< HEAD
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
=======
>>>>>>> 727f18f30d60907d1fc62b1cef28ac2f9e15e146
=======
>>>>>>> bf7b688 (Final)

function Note(props) {

  function handleClick(){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      {/* Html attributes can only be applied to html elements not to our custom ones. */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
<<<<<<< HEAD
<<<<<<< HEAD
      <Zoom in={true}>
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  )
=======
=======
>>>>>>> bf7b688 (Final)
      <button onClick = {handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
<<<<<<< HEAD
>>>>>>> 727f18f30d60907d1fc62b1cef28ac2f9e15e146
=======
>>>>>>> bf7b688 (Final)
}

export default Note;
