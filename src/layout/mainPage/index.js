import { Box, Grid } from "@mui/material";
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import Card from '../../Container/cards/index';
import StaticCard from '../../Container/statisticcards/index'
import LinechartCard from '../../Container/statisticcards/lineChart'
import CompleteTask from '../../Container/statisticcards/completeTask'
import Table from '../../components/cardWrapper/index'
import Order from '../../components/cardWrapper/orders'
import Footerbar from '../../components/Foooter/index'

function Mainpage() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <MyAppBar />
        </Grid> 

        <Grid item xs={12} sm={3}>
          <Sidebar sx={{ marginTop: '15px' }} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ display: 'flex',flexWrap: 'nowrap', gap: '16px'}}>
            <Card sx={{ minWidth: '300px', flexGrow: 1 }} />
          </Box>
          <Grid item xs={12} sm={9}>
  <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '16px', marginTop: '30px' }}>
    <StaticCard sx={{ minWidth: '300px', flexGrow: 1 }} />
    <LinechartCard sx={{ minWidth: '300px', flexGrow: 1 }} />

    <CompleteTask sx={{ minWidth: '300px', flexGrow: 1 }} />
  </Box>
</Grid>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '30px', overflowX: 'auto' }}>
              <Box sx={{ minWidth: '25%', width: { xs: '100%', sm: 'calc(50% - 25px)' }, marginLeft: { xs: '0', sm: '16px' } }}>
                <Table />
              </Box>

              <Box sx={{ minWidth: '25%', flexGrow: 1, width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                <Order />
              </Box>
            </Box>

            

        </Grid>
        
        <Grid item xs={12} sm={3}>>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '30px', overflowX: 'auto' } }>
        <Footerbar/>
              </Box>
        
        </Grid> 
      </Grid>
      
        
    </Box>
  );
}

export default Mainpage;
