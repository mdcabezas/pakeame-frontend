import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendStatuses, viewStatuses } from "../helpers/postData";

const initialState = {
  name: "",
  is_active: true,
};

export default function Statuses() {
  const [statuses, setStatuses] = useState(initialState);

  const handleChange = (event) => {
    setStatuses({ ...statuses, [event.target.name]: event.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="name"
        label="Name"
        value={statuses.name}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendStatuses(statuses);
        }}
      >
        Send Statuses
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewStatuses();
        }}
      >
        View Statuses
      </Button>
    </Box>
  );
}
