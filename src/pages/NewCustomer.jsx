import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { viewCustomers, sendCustomers } from "../helpers/postData";

const initialState = {
  code: "",
  name: "",
  address: "",
  reference: "",
  phone: "",
};

export default function NewCustomer() {
  const [customers, setCustomers] = useState(initialState);

  const handleChange = (event) => {
    setCustomers({ ...customers, [event.target.name]: event.target.value });
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
        name="code"
        label="Code"
        value={customers.code}
        onChange={handleChange}
      />
      <TextField
        name="name"
        label="Name"
        value={customers.name}
        onChange={handleChange}
      />
      <TextField
        name="address"
        label="Address"
        value={customers.address}
        onChange={handleChange}
      />
      <TextField
        name="reference"
        label="Reference"
        value={customers.reference}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        label="Phone"
        value={customers.phone}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendCustomers(customers);
        }}
      >
        Send Customers
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewCustomers();
        }}
      >
        View Customers
      </Button>
    </Box>
  );
}
