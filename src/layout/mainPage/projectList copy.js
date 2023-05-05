import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";

import Footerbar from '../../components/Foooter/index'

import ProjectList from '../../Container/profileCard/index'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
function App() {
  
  const theme = useTheme();
  return (
<Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column' ,md: 'row' },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      }}>
 
 <Box width = {'20%'} >
                  
        <Sidebar/>
 </Box>
 <Box display='flex' flexDirection='column'   width = {'80%'}>
<Box display='flex' mb={5}>
<MyAppBar/>
</Box>

<Box display="flex" flexDirection="row" ml={1} mt={2} sx={{color:"#777171"}}>
<h1 >Projects</h1>
<br/>



</Box>
<Button 
  size="small"
  href="/createproject" 
  variant="contained" 
  sx={{ 
    width: '120px', // reduce width
    padding: '4px', // reduce padding
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    whiteSpace: 'nowrap', // keep text on one line
    marginBottom: '16px'
  }}
>
  <AddIcon sx={{ fontSize: '18px' }} />
  <span>Create project</span> 
</Button>


<Box mt={5} >
<ProjectList />
</Box>
 

 
 <Box   sx={{
            display: 'flex',
          
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            marginTop: '120px',
           
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>

  <Footerbar />
</Box>


  



 </Box>

  
</Box>
  );
}
export default App;