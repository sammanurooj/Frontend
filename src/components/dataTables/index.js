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

export default function DataGridDemoAuthor() {

  const [pagination, setPagination] = useState({
    pageSize: 30,
    page: 0,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const token = localStorage.getItem('this is token');
  const { isLoading, error, data, isError } = useQuery(['projects', pagination, searchQuery], () =>
  axios.get('http://localhost:5000/api/authors/authortable', {
    params: {
      pagenumber: pagination.page,
      rowsPerPage: pagination.pageSize,
      searchQuery: searchQuery
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

    <>
    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'flex-start' }}>
    <TextField
  size="medium"
  label="Search"
  value={searchQuery}
  onChange={(event) => setSearchQuery(event.target.value)}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setSearchQuery('')}>
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
              
              <div>Author Table</div>
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
  
  pageSizeOptions={[3, 5, 30]}
  checkboxSelection
  disableRowSelectionOnClick
  
  paginationModel={pagination}
  onPaginationModelChange={setPagination}

  
/>
      )}
    </Box>
    </>
  );
}
