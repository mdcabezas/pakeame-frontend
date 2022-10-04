import React from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import './App.css';

const rows = [
  {
    id: 1,
    full_name: 'Maximiliano Jose Muñoz Andrades',
    short_name: 'Maxi',
    rut: '18573507-9',
    email: 'maxiandrades23@gmail.com',
    phone: '+56961272638',
    department_id: 1
  },
  {
    id: 2,
    full_name: 'Francisco Felipe Lira Bobadilla',
    short_name: 'Pancho',
    rut: '17374855-8',
    email: 'francisco.lira.b@gmail.com',
    phone: '+56947499964',
    department_id: 2
  },
  {
    id: 3,
    full_name: 'Manuel Domingo Cabezas Avalos',
    short_name: 'Manuel',
    rut: '13836570-0',
    email: 'manuelcabezas@gmail.com',
    phone: '+56993650988',
    department_id: 3
  },
  {
    id: 4,
    full_name: 'Carlos Rodolfo Cid Garcia',
    short_name: 'Don Carlos',
    rut: '07646545-2',
    email: 'cidcar@gmail.com',
    phone: '+56978092356',
    department_id: 1
  }
]

const columns = [
  { field: 'full_name', headerName: 'Nombre Completo', width: 250 },
  { field: 'rut', headerName: 'Rut', width: 100 },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'phone', headerName: 'Celular', width: 130 },
];


function App() {
  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
    </>
  );
}

export default App;
