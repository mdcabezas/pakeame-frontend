import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewTasks } from "../helpers/postData";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const allTasks = async () => setTasks(await viewTasks());

  useEffect(() => {
    allTasks();
  }, []);

  const formatterDate = ({ value }) => new Date(value).toLocaleString("es-CL");

  const columns = [
    {
      field: "start_date",
      type: "date",
      headerName: "Start",
      width: 150,
      valueFormatter: formatterDate,
    },
    { field: "end_date", headerName: "End", width: 150 },
    { field: "subject", headerName: "Subject", width: 150 },
    { field: "body", headerName: "Body", width: 150 },
    { field: "work_id", headerName: "Work ID", width: 70 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={tasks}
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
