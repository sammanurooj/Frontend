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

export default function DataGridDemo() {

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });


  const { isLoading, error, data, isError } = useQuery(['projects',paginationModel], () =>
    axios.get('http://localhost:5000/api/projects/projecttable', {
      params: {
        pagenumber: paginationModel.page,
        rowsPerPage: paginationModel.pageSize
      }
    }).then(response => response.data)
  );
console.log(data)

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const columns: GridColDef[] = [

    { field: 'project', headerName: 'Project', width: 200, renderCell: AuthorRenderer },
    { field: 'budget', headerName: 'Buget', width: 150, editable: true },
    { field: 'status', headerName: 'Status', width: 150, editable: true },
    { field: 'completion', headerName: 'Completion', width: 150, editable: true },
    {
      field: 'action', headerName: 'Action', width: 150, editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        ` ${params.row.action || ''}`,
    },
  ];

  const rowsdata = data && Array.isArray(data.data.users) ? data.data.users.map((user) => ({
    id: user.id,
    project: { name: user.projects, avatarUrl: user.avatar },
    budget: user.budget,
    status: user.status,
    completion: user.completion,
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
  
  pageSizeOptions={[2, 3, 25]}
  checkboxSelection
  disableRowSelectionOnClick
  
  paginationModel={paginationModel}
  onPaginationModelChange={setPaginationModel}

  
/>
      )}
    </Box>
  );
}
