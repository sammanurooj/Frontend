import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Settings, Person, Notifications } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import BraedCrumbsIcon from '../../components/BreadCrumbs/Index'
import { theme } from '../../theme/index'
import '../../App.css';
function MyAppBar() {
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
          <Person />
        </IconButton>
        <IconButton color="none">
          <Notifications />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;


