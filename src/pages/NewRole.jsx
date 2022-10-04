import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendRoles, viewRoles } from "../helpers/postData";

const initialState = {
  name: "",
  is_active: true,
};

export default function NewRole() {
  const [roles, setRoles] = useState(initialState);

  const handleChange = (event) => {
    setRoles({ ...roles, [event.target.name]: event.target.value });
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
        value={roles.name}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendRoles(roles);
        }}
      >
        Send Roles
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewRoles();
        }}
      >
        View Roles
      </Button>
    </Box>
  );
}
