import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendClients, viewClients } from "../helpers/postData";

const initialState = {
  full_name: "",
  short_name: "",
  rut: "",
  contact_name: "",
  phone: "",
  email: "",
  is_active: true,
};

export default function NewClient() {
  const [clients, setClients] = useState(initialState);

  const handleChange = (event) => {
    setClients({ ...clients, [event.target.name]: event.target.value });
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
        value={clients.full_name}
        onChange={handleChange}
      />
      <TextField
        name="short_name"
        label="Short Name"
        value={clients.short_name}
        onChange={handleChange}
      />
      <TextField
        name="rut"
        label="Rut"
        value={clients.rut}
        onChange={handleChange}
      />
      <TextField
        name="contact_name"
        label="Contact Name"
        value={clients.contact_name}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        label="Phone"
        value={clients.phone}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        value={clients.email}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendClients(clients);
        }}
      >
        Send Clients
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewClients();
        }}
      >
        View Clients
      </Button>
    </Box>
  );
}
