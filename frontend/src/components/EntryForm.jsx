import { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper, Typography, TextField, IconButton } from "@mui/material";
import { createEntry } from "../features/entries/entrySlice";

function EntryForm() {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createEntry({ text }));
    setText("");
  };

  return (
    <Paper className="form" elevation={10}>
      <TextField
        multiline="true"
        size="medium"
        placeholder="Type your entry"
        name="entry"
        id="entry"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TextField>
      <IconButton onClick={onSubmit}>Add Entry</IconButton>
    </Paper>
  );
}

export default EntryForm;
