import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Popover, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Settings, Person, Notifications } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import BraedCrumbsIcon from '../../components/BreadCrumbs/Index'
import { theme } from '../../theme/index'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import '../../App.css';
import {  useNavigate} from 'react-router-dom';

function MyAppBar() {
  const [personMenuAnchorEl, setPersonMenuAnchorEl] = useState(null);
  
  const navigate = useNavigate();


    function logout() {
        localStorage.removeItem("this is token");
    
        navigate("/");
      }

  const handlePersonMenuClick = (event) => {
    setPersonMenuAnchorEl(event.currentTarget);
  };

  const handlePersonMenuClose = () => {
    setPersonMenuAnchorEl(null);
  };

  const isPersonMenuOpen = Boolean(personMenuAnchorEl);

  return (
    <AppBar>
      <Toolbar style={{ backgroundColor: theme.palette.primary.main }}>
        <BraedCrumbsIcon />
        <div style={{ flexGrow: 1 }} />
        <TextField
          label="Search here"
          id="outlined-size-small"
          size="small"
        />
        
        <IconButton color="none">
          <Settings />
        </IconButton>
        <IconButton color="none">
          <Notifications />
        </IconButton>
        <IconButton color="none" onClick={handlePersonMenuClick}>
          <Person />
        </IconButton>
        <Popover
          open={isPersonMenuOpen}
          anchorEl={personMenuAnchorEl}
          onClose={handlePersonMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
          <ListItemButton Link to="/profile">
          <ListItemIcon>
      <PersonIcon />
    </ListItemIcon>
              <ListItemText primary="Profile" />
           </ListItemButton>
            <ListItem button  onClick={logout}>
            <ListItemIcon>
      <LogoutIcon />
    </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
            
          </List>
        </Popover>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
