import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import AuthorTable from '../../components/cardWrapper/datatable1'
import ProjectTable from '../../components/cardWrapper/datatable2'
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
        <Box sx={{
          width: { xs: '100%',sm:'100%', md: '25%' },
          [theme.breakpoints.down('md')]: {
            width: '100%'
          }
        }}>
          <Sidebar sx={{ width: '100%', maxWidth: '200px' }} />
        </Box>
        <Box sx={{ flex: '1' }}>
          <MyAppBar sx={{ width: '100%' }} />
  
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
        
            marginRight: { xs: 0, md: '10px' },
            marginTop: '5px',
            marginBottom: '60px',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>
            <AuthorTable sx={{
              width: { xs: '100%',sm:'100%', md: '100%' }
            }} />
  
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
        
            marginRight: { xs: 0, md: '10px' },
            marginTop: '5px',
            marginBottom: '60px',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>
            <ProjectTable sx={{
              width: { xs: '100%',sm:'100%', md: '100%' }
            }} />
  
          </Box>
         
          <Box sx={{display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' }, marginTop: '30px' ,  marginLeft: { xs: 0,sm:0, md: 0 },
         [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          
          }}>
            <Footerbar sx={{
              width: { xs: '100%', md: '33%' }
            }}  />
          
          
        </Box>

      </Box>
    </Box>
  );
}
export default App;