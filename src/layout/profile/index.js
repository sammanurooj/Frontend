import React from 'react'
import Container from '@mui/material/Container';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import IMage from  '../../images/profile.png'
import Pcard from '../../Container/profileCard/index'
import Button from '@mui/material/Button';
import { Box , useTheme } from '@mui/material';
import  { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
    const theme = useTheme();

    const { isLoading, error,data } = useQuery('userData', () =>
    axios.get('http://localhost:5000/api/users/applicationusers')
      .then(response => response.data)
  );
  console.log("this is profile data",data)
 
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;


  const rowsData = data && Array.isArray(data.data.users.rows) ? data.data.users.rows.map((user) => ({
    id: user.id,
    name: user.name,
    bio: user.Bio,
    phone:user.Phone,
    Location:user.Location,
    email:user.email

  })) : [];
  const secondRow = rowsData[4];
  console.log("data.users", data.data.users.rows);
console.log("formated data",rowsData[3])
  return (
 
   <>

   
<Container maxWidth="lg" sx={{ height: { xs: '40vh', sm: '50vh', md: '45vh' }, marginTop: { xs: '10px', sm: '20px', md: '30px' }, backgroundImage: 'url("https://thumbs.dreamstime.com/b/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

       
        </Container>

        <Container maxWidth="lg" sx={{ bgcolor: 'rgb(255, 255, 255)',  height: 'auto', borderRadius:'16px',boxShadow: 3 ,width: '2000px',marginRight:"300px"}} >
  <Box display="flex" flexDirection="column" justifyContent="space-between">
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        },
        flexWrap: 'wrap' // Set flexWrap to wrap
      }}
    >
      <Box display="flex" flexDirection="column" mt={5}>
        <Box display="flex" flexDirection="column" sx={{ color: '#777171' }}>
          <h4>Platform settings</h4>
        </Box>
        <Box display="flex" flexDirection="row" ml={4}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label=" Email me when someone follows me" />
            <FormControlLabel control={<Switch defaultChecked />} label=" Email me when someone mentions me" />
          </FormGroup>
        </Box>
        <Box display="flex" flexDirection="column" sx={{ color: '#777171' }}>
          <h4>Application</h4>
        </Box>
        <Box display="flex" flexDirection="row" ml={4}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="New launches and projects " />
            <FormControlLabel control={<Switch defaultChecked />} label="Subscribe to newsletter" />
          </FormGroup>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" mt={5} ml={30}>
        <Box display="flex" flexDirection="column" sx={{ color: '#777171' }}>
          <h4>Profile Information</h4>
        </Box>
        <Box style={{ textAlign: 'left', maxWidth: '400px' }}>
          <p style={{ wordWrap: 'break-word' }}>{secondRow.bio}</p>
          <p style={{ wordWrap: 'break-word' }}>Full Name: {secondRow.name}</p>
          <p style={{ wordWrap: 'break-word' }}>Mobile: {secondRow.phone}</p>
          <p style={{ wordWrap: 'break-word' }}>Email: {secondRow.email}</p>
          <p style={{ wordWrap: 'break-word' }}>Location: {secondRow.Location}</p>
        </Box>
       
      </Box>
    
      <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom={5} sx={{ flexBasis: '100%' }}>
      
      <Box sx={{ maxWidth: 'calc(33% - 20px)' }}>
      <Box display="flex" flexDirection="row" ml={1} sx={{ color: '#777171' }}>
        <h1>Projects</h1>
      </Box>
    <Pcard />
  </Box>
      </Box>
    </Box>
  </Box>
</Container>


   </>
  )
}

export default App
