import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";

import CreateProject from '../../components/cardWrapper/createProject'
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
 <Box display='flex' flexDirection='column'   width = {'100%'} mt={3} mr={3}>
<Box display='flex' mb={5}>
<MyAppBar/>
</Box>

<Box mt={5}  >
<CreateProject />
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