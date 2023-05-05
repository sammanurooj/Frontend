
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import AuthorTable from '../../components/cardWrapper/datatable1'
import ProjectTable from '../../components/cardWrapper/datatable2'
import Footerbar from '../../components/Foooter/index'
import { useSpring, animated } from 'react-spring';

import { Box ,useTheme } from '@mui/material';

function App() {
  const animationProps = useSpring({
    from: { marginTop: '45px' },
    to: async (next) => {
      while (true) {
        await next({ marginTop: '40px' });
        await next({ marginTop: '45px' });
      }
    },
  });
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
<Box display='flex'>
<MyAppBar/>
</Box>

<Box display="flex" flexDirection="row" ml={1} mt={8} sx={{color:"#777171"}} >
<animated.h1 style={{
  color: "#777171",
  textAlign: "left",
 
}}>
  Clients
 
</animated.h1>

</Box>



<Box  mr={5} >
<AuthorTable />
</Box>
<Box mt={5} mr={5}>
<ProjectTable />
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

