import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";

import EditForm from '../../Container/editForm/index'
import Footerbar from '../../components/Foooter/index'

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
 <Box display='flex' flexDirection='column'   width = {'50%'} mt={3}>
<Box display='flex' mb={5}>
<MyAppBar/>
</Box>

<Box sx={{  boxShadow: 3, width:"100%",marginTop:"80px",display: 'flex', marginLeft:"200px",marginRight:"80px"}} >
     
     <Box sx={{paddingTop:'20px',marginLeft:"50px", marginRight:"50px"}}>
       
     <EditForm  />
     </Box>
 
 </Box>


 

 
 <Box   sx={{
            display: 'flex',
            gap:'16px',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            marginTop: '250px',
           
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