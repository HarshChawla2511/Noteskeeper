import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";


function Note(props) {

  function handleClick(){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      {/* Html attributes can only be applied to html elements not to our custom ones. */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick = {handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
