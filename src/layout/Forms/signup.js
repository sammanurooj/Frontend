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
    backgroundColor: '#EFE7E7',
  
  marginTop:'15px',
  marginRight:'550px',
  marginLeft:'550px',
    padding:'8px',
    textAlign:'center',
   
    borderRadius:'0.75rem',
    border:'px solid',
    boxShadow:'5',
    
  
    display: 'block',
  });



const theme = createTheme();

export default function Signup() {

  const signUpMutation = useMutation(async ({ name,email, password }) => {
    const response = await axios.post('http://localhost:5000/api/users/signup', {name,email, password });
    console.log('this is data', response.data);
    return response.data;
 
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signUpMutation.mutate({
      name:data.get('name'),
      email: data.get('email'),
      password: data.get('password')
    });
    if (signUpMutation.isLoading) {
      return alert("signup....")
    }
    
    if (signUpMutation.isError) {
     
      return alert("email is already registered")
    }
    
    if (signUpMutation.isSuccess) {
      return alert("succefully signup")
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
       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign UP
            </Button>
            <Box sx={{ alignItems: 'center'}}>
            <Link href="/signin" variant="body2">
                  {"Do you have account ? Sign In"}
                </Link>
            </Box>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>


</MyComponent2>


    
   
  );
}