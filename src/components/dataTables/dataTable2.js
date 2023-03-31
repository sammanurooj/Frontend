import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Avatar, Grid, Typography } from '@mui/material';


import { useQuery } from 'react-query';
import axios from 'axios';


const PAGE_SIZE = 2;

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
  const [pageInfo, setPageInfo] = React.useState({ page: 0, rowsPerPage: PAGE_SIZE });
  const { isLoading, error, data, isError } = useQuery('projects', () =>
    axios.get('http://localhost:5000/api/projects/projecttable', {
      params: { page: pageInfo.page, rowsPerPage: pageInfo.rowsPerPage }
    }).then(response => response.data)
  );

  const handlePageChange = (params) => {
    const { page, pageSize } = params;
    setPageInfo({ page, rowsPerPage: pageSize });
  };

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

  const rows = data && Array.isArray(data.data) ? data.data.map((project) => ({
    id: project.id,
    project: { name: project.projects, avatarUrl: project.avatar },
    budget: project.budget,
    status: project.status,
    completion: project.completion,
    action: 'Edit',
  })) : [];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error</Typography>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: PAGE_SIZE,
              },
            },
          }}
          pageSizeOptions={[PAGE_SIZE, 3, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  );
}
