import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewDepartments } from "../helpers/postData";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  const allDepartments = async () => setDepartments(await viewDepartments());

  useEffect(() => {
    allDepartments();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 220 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={departments}
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
