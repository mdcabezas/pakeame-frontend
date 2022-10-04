import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { viewWorks } from "../helpers/postData";

// const initialState = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];
const initialState = [
  {
    id: 1,
    code: "120582772",
    sector: "072111",
    movil: "20901",
    comments: "Fuerte Olor",
    description: "Fuga",
    detail: "100 Cilindro",
    date: "2022-06-20T12:38:22.001Z",
    is_active: true,
    client_id: 1,
    status_id: 1,
    customer_id: 1,
  },
];

const columns = [
  { field: "code",
    headerName: "Code",
    width: 110, 
  },
  {
    field: "comments",
    headerName: "Comments",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    type: "dateTime",
    width: 180,
    valueGetter: ({ value }) => value && new Date(value),
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

export default function ViewWorks() {
  const [works, setWorks] = useState(initialState);

  const getWorks = async () => setWorks(await viewWorks());

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={works}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}
