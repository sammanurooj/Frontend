import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
 import Logo1 from '../../images/XD_logo.png'
 import User from '../../images/user.png'
 import Logo2 from '../../images/Logo2.jpg'
 import Logo3 from '../../images/Logo3.jpg'

 function BasicTable({ name, members, budget, completion }) {
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
          <TableRow>
            <TableCell align="left">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/jsdn/jjjk" alt="logo" width="25" height="25" style={{ marginRight: '10px' }} />
                <span>{name}</span>
              </div>
            </TableCell>
            <TableCell align="left">{members}</TableCell>
            <TableCell align="right" width={'150px'}>
              {budget}
            </TableCell>
            <TableCell align="right" width={'150px'}>
              {completion}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default BasicTable;
