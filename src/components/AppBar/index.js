import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreateIcon from '@mui/icons-material/Create';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const LightAppBar = styled(AppBar)({
  backgroundColor: '#f2f2f2',
  color: '#333',
  alignItems:'center',


});
const iconButtonStyle = { fontSize: '1.5rem', padding: 2,marginLeft: '0.5rem' };

const textStyle = { fontSize: '1rem', marginLeft: '0.5rem' };
export default function MyAppBar() {
  return (
    <Container maxWidth='lg'>
    <LightAppBar position="static" sx={{borderRadius:2}}>
      <Toolbar>
      
        
        <Link to="/signup">
        <IconButton  style={iconButtonStyle}>
          <CreateIcon />
        </IconButton>
        </Link>
        <Typography variant="h6" component="div" style={textStyle} >
          Sign Up
        </Typography>

        <Link to="/signin">

  
        <IconButton  style={iconButtonStyle}>
          <ExitToAppIcon />
        </IconButton>
        </Link>
        <Typography variant="h6" component="div"  style={textStyle} >
          Sign In
        </Typography>
      </Toolbar>
    </LightAppBar>
    </Container>
  );
}
