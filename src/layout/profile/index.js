import React from 'react'
import Container from '@mui/material/Container';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import IMage from  '../../images/profile.png'
import Pcard from '../../Container/profileCard/index'

import { Box , useTheme } from '@mui/material';
import  { useState } from 'react';

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
  const secondRow = rowsData[3];
  console.log("data.users", data.data.users.rows);
console.log("formated data",rowsData[3])
  return (
 
   <>

   
<Container maxWidth="lg" sx={{ height: { xs: '40vh', sm: '50vh', md: '60vh' }, marginTop: { xs: '10px', sm: '20px', md: '30px' }, backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg")', backgroundSize: 'cover', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

       
        </Container>

<Container maxWidth="lg" sx={{ bgcolor: 'rgb(255, 255, 255)', height: { xs: '410vh', sm: '500vh', md: '115vh' } ,borderRadius:'16px',boxShadow: 3 }}>


        <Box display ="flex" flexDirection="column"  justifyContent='space-between' >

<Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column' ,md: 'row' },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      }}>
        <Box display="flex" flexDirection="column" mt={5}>

        <Box display="flex" flexDirection="column" >
         
         <h4>Platform settings</h4>



        </Box>


        <Box display="flex" flexDirection="row" ml={4}>
        
     
        <FormGroup>
    
        
      <FormControlLabel control={<Switch defaultChecked />} label=" Email me when someone follows me" />
      <FormControlLabel control={<Switch defaultChecked />} label="Email me when someone answers on my post" />
      <FormControlLabel control={<Switch defaultChecked />} label=" Email me when someone mentions me" />
      
    </FormGroup>


 
        </Box>

        <h4>Application</h4>

        <Box display="flex" flexDirection="row" ml={4}>

       
        <FormGroup>
    
        <FormControlLabel control={<Switch defaultChecked />} label="
New launches and projects " />
      <FormControlLabel control={<Switch defaultChecked />} label="Email me when someone answers on my post" />
      <FormControlLabel control={<Switch defaultChecked />} label=" 
Subscribe to newsletter" />
      
      
    </FormGroup>


 
        </Box>

        

     

        </Box>

        <Box display="flex" flexDirection="column" mt={5}>

       


     
        <Box display="flex" flexDirection="column" >
         
        <h4>Profile Information</h4>



        </Box>
         
        
        <div>

        <p>{secondRow.bio}</p>
    {/* {rowsData[3].length > 0 ? (
      rowsData[3].map((user) => (
        <p id={`user-${user.id}`} key={user.id}>
          {user.name}: {user.bio}
        </p>
      ))
    ) : (
      <div>No data to display.</div>
    )} */}
  </div>

       <Box >
        <p>Full Name:  
        {secondRow.name}</p>
        <p>Mobile:  
{secondRow.phone}</p>
 <p>Email:  
 {secondRow.email}</p>
 <p>Location:  
 {secondRow.Location}</p>
       </Box>

        </Box>



        <Box display="flex" flexDirection="column" mt={5}>

        <Box display="flex" flexDirection="column" >
         
        <h4>Conversation</h4>



        </Box>

       <Box >
       <TableContainer>
  <Table sx={{ borderCollapse: 'collapse' }}>
    <TableBody>
      {rowsData.map((user) => (
        <TableRow key={user.id}>
          <TableCell sx={{ py: 2 }}>
            <img src={IMage } alt="Profile Icon" style={{ width: '30px', height: '30px' }} />
            <span style={{ marginLeft: '10px' }}>{user.name}</span>
          </TableCell>
          <TableCell sx={{ py: 2 }}>Reply</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
       </Box>

        </Box>

        



        </Box>


<Box display="flex" flexDirection="row" ml={1}>
<h4>projects</h4>
<br/>

</Box>

<Box display="flex" flexDirection="row" justifyContent='space-between'>

<Pcard/>



</Box>
        </Box>
      </Container>

   </>
  )
}

export default App
