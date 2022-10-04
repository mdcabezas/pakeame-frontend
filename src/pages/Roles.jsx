import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewRoles } from "../helpers/postData";

export default function Roles() {
  const [roles, setRoles] = useState([]);

  const allRoles = async () => setRoles(await viewRoles());

  useEffect(() => {
    allRoles();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={roles}
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
