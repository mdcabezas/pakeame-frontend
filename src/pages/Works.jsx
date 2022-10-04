import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewWorks } from "../helpers/postData";
import Chip from "@mui/material/Chip";

export default function Works() {
  const [works, setWorks] = useState([]);

  const navigate = useNavigate();

  const allWorks = async () => setWorks(await viewWorks());

  useEffect(() => {
    allWorks();
  }, []);

  const handleRowClick = (params) => {
    navigate(`/tasks-per-work/${params.row.id}`);
  }

  const statusChip = ({ row }) => (
    <Chip 
    // color="error" 
    label={row.status.name} 
    size="small" 
    />
  );
  
  const formatterDate = ({ value }) => new Date(value).toLocaleString("es-CL");

  const columns = [
    { field: "code", headerName: "Code", width: 100 },
    { field: "comments", headerName: "Comments", width: 250 },
    { field: "description", headerName: "Description", width: 150 },
    {
      field: "date",
      type: "date",
      headerName: "Date",
      width: 200,
      valueFormatter: formatterDate,
    },
    {
      field: "is_active",
      headerName: "Status",
      width: 200,
      renderCell: statusChip,
    },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={works}
        columns={columns}
        pageSize={5}
        density="compact"
        rowsPerPageOptions={[5]}
        // checkboxSelection
        onRowClick={handleRowClick}
        disableSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
}
