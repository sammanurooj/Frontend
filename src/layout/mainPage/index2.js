import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import Card from '../../Container/cards/index';
import StaticCard from '../../Container/statisticcards/index'
import LinechartCard from '../../Container/statisticcards/lineChart'
import CompleteTask from '../../Container/statisticcards/completeTask'
import Table from '../../components/cardWrapper/index'
import Order from '../../components/cardWrapper/orders'
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
 <Box display='flex' flexDirection='column'   width = {'80%'}>
<Box display='flex' mb={5}>
<MyAppBar/>
</Box>

<Box mt={10} >
<Card />
</Box>
 
 <Box sx={{
            display: 'flex',
            gap:'16px',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
           
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>
   <StaticCard/>
  <LinechartCard/>
  <CompleteTask/>

 </Box>
 <Box sx={{
            display: 'flex',
            gap:'16px',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            marginTop: '30px',
           
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>

 <Table/>
 <Order />
 </Box>
 <Box display='flex'  sx={{
            display: 'flex',
            gap:'16px',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            marginTop: '30px',
           
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