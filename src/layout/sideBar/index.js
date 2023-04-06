import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import Button from '@mui/material/Button';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';

import Toolbar from '@mui/material/Toolbar';
//import { Link } from 'react-router-dom';

const drawerWidth = 250;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isLoggedIn = localStorage.getItem('token') !== null;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div style={{ zIndex: 0, backgroundColor: '#071e26', color: 'white', borderRadius: '10px',height:'1000px' }}>
      <Toolbar />
      <Divider />
      <List>
      <ListItem>
      <ListItemButton Link to="/">
      <ListItemIcon>
      <InboxIcon style={{ color: 'white' }} />

      </ListItemIcon>
      <ListItemText primary={"DashBoard"} />

      </ListItemButton>



      </ListItem>
      </List>

      <List>
      <ListItem>
      <ListItemButton Link to="/table">
      <ListItemIcon>
      <InboxIcon style={{ color: 'white' }} />

      </ListItemIcon>
      <ListItemText primary={"Clients"} />

      </ListItemButton>



      </ListItem>
      </List>

      <List>
      <ListItem>
      <ListItemButton>
      <ListItemIcon>
      <InboxIcon style={{ color: 'white' }} />

      </ListItemIcon>
      <ListItemText primary={"Billing"} />

      </ListItemButton>



      </ListItem>
      </List>
      <List>
      <ListItem>
      <ListItemButton>
      <ListItemIcon>
      <InboxIcon style={{ color: 'white' }} />

      </ListItemIcon>
      <ListItemText primary={"RTL"} />

      </ListItemButton>



      </ListItem>
      </List>
      <List>
      <ListItem>
      <ListItemButton Link to="/profile">
      <ListItemIcon>
      <InboxIcon style={{ color: 'white' }} />

      </ListItemIcon>
      <ListItemText primary={"Profile"} />

      </ListItemButton>



      </ListItem>
      </List>
      
      {!isLoggedIn && (
      <List>
        <ListItem>
          <ListItemButton Link to="/signin">
            <ListItemIcon>
              <InboxIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary={"Signin"} />
          </ListItemButton>
        </ListItem>
      </List>
    )}

    {!isLoggedIn && (
      <List>
        <ListItem>
          <ListItemButton Link to="/signup">
            <ListItemIcon>
              <InboxIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary={"SignUp"} />
          </ListItemButton>
        </ListItem>
      </List>
    )}

      <Divider />
      

      <Divider />

 



     

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Button
backgroundColor="red"
  aria-label="open drawer"
  edge="start"
  onClick={handleDrawerToggle}
  sx={{ mr: 2, display: 'block' }}
>
  <MenuIcon 
   />
</Button>


      
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { xs: 'none', sm: 'block' }, // hide on small screens
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="permanent"
          open
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}
      >
        <Toolbar />
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            display: { xs: 'block', sm: 'none' }, // show on small screens
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}