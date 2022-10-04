import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendDepartments, viewDepartments } from "../helpers/postData";

const initialState = {
  name: "",
  is_active: true,
};

export default function NewDepartment() {
  const [departments, setDepartments] = useState(initialState);

  const handleChange = (event) => {
    setDepartments({ ...departments, [event.target.name]: event.target.value });
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
        value={departments.name}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendDepartments(departments);
        }}
      >
        Send Departments
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewDepartments();
        }}
      >
        View Departments
      </Button>
    </Box>
  );
}
