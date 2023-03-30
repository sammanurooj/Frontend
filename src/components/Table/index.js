import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
 import Logo1 from '../../images/XD_logo.png'
 import User from '../../images/user.png'
 import Logo2 from '../../images/Logo2.jpg'
 import Logo3 from '../../images/Logo3.jpg'

function BasicTable() {
  // Define example data
  const rows = [
    { id: 1, company: { logo: Logo1, name: 'Material UI XD Version' }, members: ['user1', 'user2', 'user3'], budget: 150000, completion: 75 },
    { id: 2, company: { logo: Logo2, name: 'Add Progress Track' }, members: ['user4', 'user5'], budget: 50000, completion: 50 },
    { id: 3, company: { logo: Logo3, name: 'Fix Platform Errors' }, members: ['user6', 'user7', 'user8', 'user9'], budget: 1000000, completion: 100 },
    { id: 4, company: { logo: Logo3, name: 'Launch our Mobile App' }, members: ['user10'], budget: 250000, completion: 25 },
    { id: 5, company: { logo: Logo1, name: 'Add the New Pricing Page' }, members: ['user11', 'user12'], budget: 75000, completion: 90 },
    { id: 6, company: { logo: Logo2, name: 'Redesign New Online Shop' }, members: ['user13', 'user14', 'user15'], budget: 500000, completion: 60 },
  ];

  // Define state to store selected row
  const [selectedRow, setSelectedRow] = useState(null);

  // Define function to handle row selection
  const handleRowClick = (row) => {
    setSelectedRow(row.id);
  };

  return (
    <TableContainer>
      <Table  >
      <TableHead style={{ paddingBottom: '30px' }}>
  <TableRow>
    <TableCell align="left">Companies</TableCell>
    <TableCell align="left">Members</TableCell>
    <TableCell align="right">Budget</TableCell>
    <TableCell align="right">Completion</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {rows.map((row) => (
    <TableRow key={row.id} onClick={() => handleRowClick(row)} selected={selectedRow === row.id}>
      <TableCell align="left">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={row.company.logo} alt={row.company.name} width="25" height="25" style={{ marginRight: '10px' }} />
          <span>{row.company.name}</span>
        </div>
      </TableCell>
      <TableCell align="left">
        {row.members.map((member) => (
          <img key={member} src={User} alt={member} width="20" height="20" style={{ marginRight: '5px' }} />
        ))}
      </TableCell>
      <TableCell align="right" width={'150px'}>{`$${row.budget.toLocaleString()}`}</TableCell>
      <TableCell align="right" width={'150px'}>
        <div style={{ backgroundColor: 'lightblue', width: `${row.completion}%`, height: '10px' }}></div>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
