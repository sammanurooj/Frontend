import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";

import PreviewForm from '../../Container/profilecardPreview/index'
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
 <Box display='flex' mb={5}>
<MyAppBar/>
</Box>
 <Box    width = {'100%'} mt={5}>


<Box mt={10}>
<PreviewForm  />
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