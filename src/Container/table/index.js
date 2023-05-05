import CompanyTable from '../../components/Table/index';
//  import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { Box ,useTheme } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const theme = useTheme();
  const token = localStorage.getItem('this is token');
  const { isLoading, error, data } = useQuery('tableData', () =>
    axios
      .get('http://localhost:5000/api/analysiscompany/company', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
  );
  console.log('this is data', data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const tableData =
    data && Array.isArray(data.data.users.rows)
      ? data.data.users.rows.map((user) => ({
          id: user.id,
          name: user.companies,
          members: user.members,
          budget: user.budget,
          completion: user.completion,
        }))
      : [];
  console.log('this is dashboard table data', tableData);

  return (
    <TableContainer>
      <Table>
        <TableHead style={{ paddingBottom: '30px' }}>
          <TableRow>
            <TableCell align="left">Companies profile</TableCell>
            <TableCell align="left">Members</TableCell>
            <TableCell align="right">Budget</TableCell>
            <TableCell align="right">Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((rowData) => (
            <TableRow key={rowData.id}>
              <TableCell align="left">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg" alt={rowData.name} width="40" height="40" style={{ marginRight: '10px' }} />
                  <span>{rowData.name}</span>
                </div>
              </TableCell>
              <TableCell align="left">{rowData.members}</TableCell>
              <TableCell align="right" width={'150px'}>
                {rowData.budget}
              </TableCell>
              <TableCell align="right" width={'150px'}>
                {rowData.completion}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App