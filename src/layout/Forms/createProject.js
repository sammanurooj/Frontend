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
import SaveIcon from '@mui/icons-material/Save';

import { styled } from '@mui/system';








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



     
        <Box
          
        >
      
          <Typography component="h1" variant="h5" mt={4} sx={{ color: '#777171' }} >
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
           <Box sx={{ width: '150px'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="small"
              sx={{ fontSize: '12px',marginBottom:"20px", marginTop:"30px" }}
      startIcon={<SaveIcon />}
            >
            Create Project
            </Button>
            </Box>
            
          </Box>
        </Box>
        
 



    
   
  );
}