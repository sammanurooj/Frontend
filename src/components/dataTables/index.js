import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Avatar, Grid, Typography } from '@mui/material';




  // Define custom renderer for "Autho" column
  const AuthorRenderer = ({ value }) => (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Avatar src={value.avatarUrl} alt={value.name} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">{value.name}</Typography>
      </Grid>
    </Grid>
  );

const columns: GridColDef[] = [
    { field: 'autho', headerName: 'Autho', width: 200, renderCell: AuthorRenderer },
    { field: 'function', headerName: 'Function', width: 150,editable: true },
    { field: 'status', headerName: 'Status', width: 150,editable: true },
    { field: 'employeed', headerName: 'Employeed', width: 150,editable: true },
     { field: 'action', headerName: 'Action', width: 150,editable: true,
    valueGetter: (params: GridValueGetterParams) =>
      ` ${params.row.action || ''}`,
  },
];

const rows = [
    {
      id: 1,
      autho: { name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
      function: 'Manager',
      status: 'Active',
      employeed: '2020-01-01',
      action: 'Edit',
    
    },
    {
        id: 2,
        autho: { name: 'John', avatarUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 3,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 4,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 5,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 6,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 7,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },

]
export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      disableColumnMenu
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  );
}
