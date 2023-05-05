import { Box, useTheme } from '@mui/material';
import MyAppBar from '../../components/AppBar/index';
import Footerbar from '../../components/Foooter/index';
import SignUp from '../../layout/Forms/signup';
import Container from '@mui/material/Container';

function App() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="250px" style={{ height: '35vh', backgroundImage: 'url("https://www.shutterstock.com/image-vector/internet-digital-security-technology-concept-260nw-1932256898.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', marginTop:"20px" ,marginLeft:'5px',marginRight:'5px'  ,   borderRadius:'16px'}}>
        <MyAppBar sx={{marginTop:'30px'}}/>
        </Container>
        <Box display='flex' justifyContent='center' >
          <SignUp />
        </Box>
   

      <Box display='flex'>
        <Footerbar />
      </Box>
    </>
  );
}

export default App;
