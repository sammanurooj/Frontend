import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Avatar, Grid, Typography } from '@mui/material';
import  { useState } from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { AppBar, Toolbar } from '@mui/material'; // import the Toolbar component


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
  const [projectsearchQuery, projectsetSearchQuery] = useState('');
  const token = localStorage.getItem('this is token');
  const { isLoading, error, data, isError } = useQuery(['projects',paginationModel,projectsearchQuery], () =>
    axios.get('http://localhost:5000/api/projects/projecttable', {
      params: {
        pagenumber: paginationModel.page,
        rowsPerPage: paginationModel.pageSize,
        projectsearchQuery: projectsearchQuery
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.data)
  );
console.log("table data",data)

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

    <>
       <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'flex-start'}}>
    <TextField
  size="medium"
  label="Search"
  value={projectsearchQuery}
  onChange={(event) => projectsetSearchQuery(event.target.value)}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => projectsetSearchQuery('')}>
          <ClearIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
  sx={{
    width: '50%', // set the width of the TextField
    minWidth: '150px', // set a minimum width to avoid the TextField being too small
    alignSelf: 'flex-start', // align the TextField to the left or top-left corner of the container
    '& .MuiInputBase-root': {
      minWidth: '0px', // to allow the field to shrink if needed
    },
  }}
/>

</Box>
    <AppBar position="static" sx={{backgroundColor: '#1976d2',borderRadius:2}}>
            <Toolbar>
              
              <div>Project Table</div>
            </Toolbar>
          </AppBar>
 
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
    </>
  );
}
