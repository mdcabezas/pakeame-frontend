import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendSkills, viewSkills } from "../helpers/postData";

const initialState = {
  name: "",
  is_active: true,
};

export default function NewSkill() {
  const [skills, setSkills] = useState(initialState);

  const handleChange = (event) => {
    setSkills({ ...skills, [event.target.name]: event.target.value });
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
        value={skills.name}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendSkills(skills);
        }}
      >
        Send Skills
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewSkills();
        }}
      >
        View Skills
      </Button>
    </Box>
  );
}
