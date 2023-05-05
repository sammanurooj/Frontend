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
<Box sx={{ width: '150px'}}>
  <Button 
    size="small"
    href="/createproject" 
    variant="contained" 
    sx={{ fontSize: '12px' }}
      startIcon={<AddIcon />}
  >
    
    <span>Create project</span> 
  </Button>
</Box>


<Box mr={35} >
<ProjectList />
</Box>
 

 
 <Box   sx={{
            display: 'flex',
          
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            marginTop: '150px',
           
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