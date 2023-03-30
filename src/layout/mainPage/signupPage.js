import { Box, useTheme } from '@mui/material';
import MyAppBar from '../../components/AppBar/index';
import Footerbar from '../../components/Foooter/index';
import SignUp from '../../layout/Forms/signup';
import Container from '@mui/material/Container';

function App() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="250px" style={{ height: '30vh', backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg")', backgroundSize: 'cover',marginTop:"30px" ,marginLeft:'5px',marginRight:'5px'  ,   borderRadius:'16px'}}>
        <MyAppBar sx={{marginTop:'30px'}}/>
        </Container>
        <Box display='flex' justifyContent='center' mt={5}>
          <SignUp />
        </Box>
   

      <Box display='flex'>
        <Footerbar />
      </Box>
    </>
  );
}

export default App;
