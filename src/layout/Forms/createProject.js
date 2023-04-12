import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent } from "@mui/material";
import { useMutation } from 'react-query';
import axios from 'axios';


import { styled } from '@mui/system';


const MyComponent2 = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'rgb(255 249 249)',
  
  marginTop:'24px',
  marginRight:'550px',
  marginLeft:'550px',
    padding:'8px',
    textAlign:'center',
   
    borderRadius:'0.75rem',
    border:'0px solid',
    boxShadow:'4',
    
  
    display: 'block',
  });



const theme = createTheme();

export default function Signup() {

  const projectMutation = useMutation(async ({ pic,title, description}) => {
    const response = await axios.post('http://localhost:5000/api/userproject/createprojectdata', {pic,title, description });
    console.log('this is project data', response.data);
    return response.data;
 
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    projectMutation.mutate({
      pic:data.get('pic'),
      title: data.get('title'),
      description: data.get('description')
    });
    if (projectMutation.isLoading) {
      return alert("creating....")
    }
    
    if (projectMutation.isError) {
     
      return alert("complete your data")
    }
    
    if (projectMutation.isSuccess) {
      return alert("succefully created")
    }
  };


  return (



<MyComponent2 >
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
           
           
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      
          <Typography component="h1" variant="h5">
            Create Project
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="pic"
              label="Pic URL"
              name="pic"
              autoComplete="name"
              autoFocus
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="project Title"
              name="title"
             
              autoFocus
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              id="description"
             
              variant="standard"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Create Project
            </Button>
            
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>


</MyComponent2>


    
   
  );
}