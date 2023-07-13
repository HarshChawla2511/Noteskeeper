import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Note(props) {

  function handleClick(){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      {/* Html attributes can only be applied to html elements not to our custom ones. */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  )
}

export default Note;
