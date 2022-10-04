import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewCustomers } from "../helpers/postData";

export default function Customers() {
  const [clients, setCustomers] = useState([]);

  const allCustomers = async () => setCustomers(await viewCustomers());

  useEffect(() => {
    allCustomers();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "code", headerName: "Code", width: 120 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "reference", headerName: "Reference", width: 200 },
    { field: "phone", headerName: "Phone", width: 120 },
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
