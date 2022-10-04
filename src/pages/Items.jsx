import React, { useState, useEffect } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { viewItems } from "../helpers/postData";

export default function Items() {
  const [items, setItems] = useState([]);

  const allItems = async () => setItems(await viewItems());

  useEffect(() => {
    allItems();
  }, []);

  const columns = [
    // { field: "id", hide: true },
    { field: "full_name", headerName: "Full Name", width: 370 },
    { field: "short_name", headerName: "Short Name", width: 180 },
    { field: "code", headerName: "Code", width: 120 },
    { field: "brand", headerName: "Brand", width: 120 },
    { field: "cost", headerName: "Cost", width: 100 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={items}
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
