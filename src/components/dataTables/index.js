import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Avatar, Grid, Typography } from '@mui/material';
import  { useState } from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';




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

export default function DataGridDemoAuthor() {

  const [pagination, setPagination] = useState({
    pageSize: 30,
    page: 0,
  });

  const token = localStorage.getItem('this is token');
  const { isLoading, error, data, isError } = useQuery(['projects',pagination], () =>
    axios.get('http://localhost:5000/api/authors/authortable', {
      params: {
        pagenumber: pagination.page,
        rowsPerPage: pagination.pageSize
      },
      headers: {
        Authorization: `Bearer ${token}`
      }

    }).then(response => response.data)
  );
console.log(data)

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const columns: GridColDef[] = [

    { field: 'Author', headerName: 'Author', width: 200, renderCell: AuthorRenderer },
    { field: 'Function', headerName: 'Function', width: 150, editable: true },
    { field: 'status', headerName: 'Status', width: 150, editable: true },
    { field: 'Employeed', headerName: 'Employeed', width: 150, editable: true },
    {
      field: 'action', headerName: 'Action', width: 150, editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        ` ${params.row.action || ''}`,
    },
  ];

  const rowsdata = data && Array.isArray(data.data.users) ? data.data.users.map((user) => ({
    id: user.id,
    Author: { name: user.Author, avatarUrl: user.avatar },
    Function: user.Function,
    status: user.status,
    Employeed: user.Employeed,
    action:'Edit'
  })) : [];
  console.log('this is ', rowsdata);
  

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error</Typography>
      ) : (
        <DataGrid
  rows={rowsdata}
  columns={columns}
  disableColumnMenu
  
  pageSizeOptions={[3, 5, 30]}
  checkboxSelection
  disableRowSelectionOnClick
  
  paginationModel={pagination}
  onPaginationModelChange={setPagination}

  
/>
      )}
    </Box>
  );
}
