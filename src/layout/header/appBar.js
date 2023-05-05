import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Popover, List, ListItem, ListItemText, ListItemButton ,Badge,Box} from "@mui/material";
import { Settings, Person, Notifications } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import BraedCrumbsIcon from '../../components/BreadCrumbs/Index'
import { theme } from '../../theme/index'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import '../../App.css';
import {  useNavigate} from 'react-router-dom';
import Notification from '../../Container/notification/index'

function MyAppBar() {
  const [personMenuAnchorEl, setPersonMenuAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [notificationCount, setNotificationCount] = useState(".."); // Example initial value of notification count

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("this is token");
    navigate("/signin");
  }

  const handlePersonMenuClick = (event) => {
    setPersonMenuAnchorEl(event.currentTarget);
  };

  const handlePersonMenuClose = () => {
    setPersonMenuAnchorEl(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handlesettingsClick = () => {
    navigate('/profile')
  };
  

  const isPersonMenuOpen = Boolean(personMenuAnchorEl);
  const isNotificationOpen = Boolean(notificationAnchorEl);

  return (
    <AppBar>
      <Toolbar style={{ backgroundColor: theme.palette.primary.main }}>
        <BraedCrumbsIcon />
        <div style={{ flexGrow: 1 }} />

        <IconButton style={{ color: 'grey' }} onClick={handlesettingsClick}>
          <Settings />
        </IconButton>
        <IconButton color="primary" onClick={handleNotificationClick}>
      <Badge badgeContent={notificationCount} color="error">
        <Notifications />
      </Badge>
    </IconButton>
        <IconButton color="primary" onClick={handlePersonMenuClick}>
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
              <ListItemIcon style={{ minWidth: 0, marginRight: '0.5rem',color:"#099B12" }} >
                <PersonIcon  />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItem button onClick={logout}>
              <ListItemIcon style={{ minWidth: 0, marginRight: '0.5rem',color:"#FF2810" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Popover>

        <Popover
          open={isNotificationOpen}
          anchorEl={notificationAnchorEl}
          onClose={handleNotificationClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
       <Box sx={{ width: 400 }}>
  <Notification />
</Box>
        
        </Popover>

      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;