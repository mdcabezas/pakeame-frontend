import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { viewEmployees, sendEmployees } from "../helpers/postData";

const initialState = {
  full_name: "",
  short_name: "",
  rut: "",
  email: "",
  personal_phone: "",
  work_phone: "",
  is_active: true,
};

export default function NewEmployee() {
  const [employees, setEmployees] = useState(initialState);

  const handleChange = (event) => {
    setEmployees({ ...employees, [event.target.name]: event.target.value });
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
        name="full_name"
        label="Full Name"
        value={employees.full_name}
        onChange={handleChange}
      />
      <TextField
        name="short_name"
        label="Short Name"
        value={employees.short_name}
        onChange={handleChange}
      />
      <TextField
        name="rut"
        label="Rut"
        value={employees.rut}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        value={employees.email}
        onChange={handleChange}
      />
      <TextField
        name="personal_phone"
        label="Personal Phone"
        value={employees.personal_phone}
        onChange={handleChange}
      />
      <TextField
        name="work_phone"
        label="Work Phone"
        value={employees.work_phone}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendEmployees(employees);
        }}
      >
        Send Employees
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewEmployees();
        }}
      >
        View Employees
      </Button>
    </Box>
  );
}
