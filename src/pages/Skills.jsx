import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewSkills } from "../helpers/postData";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  const allSkills = async () => setSkills(await viewSkills());

  useEffect(() => {
    allSkills();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 220 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={skills}
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
