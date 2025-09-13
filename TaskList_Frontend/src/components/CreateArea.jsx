import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, useFormControl } from "@mui/material";
import { Zoom } from "@mui/material";
import { createTask } from "../service/NoteService";

function CreateArea(props) {
  const [task, setTask] = useState({
    title: "",
    note: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask(prevTask => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title: "",
      note: ""
    });
    event.preventDefault();
  }

  const [isfocused, setFocused] = useState(false);

  function handleClick() {
    setFocused(!isfocused);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Title"
          rows="1"
          onFocus={handleClick}
        />
        {isfocused && (
          <div>
            <textarea
              name="note"
              onChange={handleChange}
              value={task.note}
              placeholder="Take a note..."
              rows="3"
            />
            <Zoom in={true}>
              <Fab onClick={submitTask}><AddIcon /></Fab>
            </Zoom></div>)}

      </form>
    </div>
  );
}

export default CreateArea;
