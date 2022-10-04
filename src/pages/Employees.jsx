import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewEmployees } from "../helpers/postData";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  const allEmployees = async () => setEmployees(await viewEmployees());

  useEffect(() => {
    allEmployees();
  }, []);

  const columns = [
    // { field: "id", hide: true },
    { field: "full_name", headerName: "Full Name", width: 220 },
    { field: "short_name", headerName: "Short Name", width: 120 },
    { field: "rut", headerName: "Rut", width: 100 },
    { field: "personal_phone", headerName: "Personal Phone", width: 120 },
    { field: "work_phone", headerName: "Work Phone", width: 120 },
    { field: "cost_hour", headerName: "Cost Hour", width: 100 },
    { field: "email", headerName: "Email", width: 180 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={employees}
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
