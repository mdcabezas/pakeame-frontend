import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { viewStatuses, viewClients, viewCustomers, sendWorks } from "../helpers/postData";

const initialState = {
  code: "",
  sector: "",
  movil: "",
  comments: "",
  description: "",
  detail: "",
  date: "",
  is_active: true,
  client_id: "",
  status_id: "",
  customer_id: "",
};

export default function NewWork() {
  const [works, setWorks] = useState(initialState);

  const [clients, setClients] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [statuses, setStatuses] = useState([]);

  const getClients = async () => setClients(await viewClients());
  const getCostumers = async () => setCustomers(await viewCustomers());
  const getStatuses = async () => setStatuses(await viewStatuses());

  useEffect(() => {
    getClients();
    getCostumers();
    getStatuses();
  }, []);

  const handleChange = (event) => {
    setWorks({ ...works, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :nwork(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <TextField
            name="code"
            label="Code"
            value={works.code}
            onChange={handleChange}
          />
          <TextField
            name="sector"
            label="Sector"
            value={works.sector}
            onChange={handleChange}
          />
          <TextField
            name="movil"
            label="Movil"
            value={works.movil}
            onChange={handleChange}
          />
          <TextField
            name="comments"
            label="Comments"
            value={works.comments}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            value={works.description}
            onChange={handleChange}
          />
          <TextField
            name="detail"
            label="Detail"
            value={works.detail}
            onChange={handleChange}
          />
          {/* <TextField
          name="date"
          label="Date"
          value={works.date}
          onChange={handleChange}
        /> */}
          <Button
            variant="outlined"
            onClick={() => {
              sendWorks({...works, date:new Date().toLocaleString("es-CL")});
            }}
          >
            SEND OTS
          </Button>
        </FormControl>

        <FormControl>
          <InputLabel id="client-label">Client</InputLabel>
          <Select
            name="client_id"
            labelId="client-label"
            value={works.client_id}
            label="Client"
            onChange={handleChange}
          >
            {clients.map((list) => (
              <MenuItem key={list?.id} value={list?.id}>
                {list?.short_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="customer-label">Customer</InputLabel>
          <Select
            name="customer_id"
            labelId="customer-label"
            value={works.customer_id}
            label="Customer"
            onChange={handleChange}
          >
            {customers.map((list) => (
              <MenuItem key={list?.id} value={list?.id}>
                {list?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            name="status_id"
            labelId="status-label"
            value={works.status_id}
            label="Status"
            onChange={handleChange}
          >
            {statuses.map((list) => (
              <MenuItem key={list?.id} value={list?.id}>
                {list?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {JSON.stringify({...works, date:new Date().toLocaleString("es-CL")})}
    </>
  );
}
