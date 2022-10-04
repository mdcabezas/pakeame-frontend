import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { viewItems, sendItems } from "../helpers/postData";

const initialState = {
  full_name: "",
  short_name: "",
  code: "",
  brand: "",
  is_active: true,
};

export default function NewItem() {
  const [items, setItems] = useState(initialState);

  const handleChange = (event) => {
    setItems({ ...items, [event.target.name]: event.target.value });
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
        value={items.full_name}
        onChange={handleChange}
      />
      <TextField
        name="short_name"
        label="Short Name"
        value={items.short_name}
        onChange={handleChange}
      />
      <TextField
        name="code"
        label="Code"
        value={items.code}
        onChange={handleChange}
      />
      <TextField
        name="brand"
        label="Brand"
        value={items.brand}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          sendItems(items);
        }}
      >
        Send Items
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          viewItems();
        }}
      >
        View Items
      </Button>
    </Box>
  );
}
