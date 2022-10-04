import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewClients } from "../helpers/postData";

export default function Clients() {
  const [clients, setClients] = useState([]);

  const allClients = async () => setClients(await viewClients());

  useEffect(() => {
    allClients();
  }, []);

  const columns = [
    { field: "full_name", headerName: "Full Name", width: 220 },
    { field: "short_name", headerName: "Short Name", width: 120 },
    { field: "rut", headerName: "Rut", width: 100 },
    { field: "contact_name", headerName: "Contact Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "email", headerName: "Email", width: 180 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
}
