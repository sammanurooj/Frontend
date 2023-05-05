import { Box, useTheme } from '@mui/material';
import MyAppBar from '../../components/AppBar/index';
import Footerbar from '../../components/Foooter/index';
import Signin from '../../layout/Forms/signin';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      height='100vh'
      style={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <Box display='flex'  justifyContent='center' mt={3}>
        <MyAppBar />
      </Box>

      <Box display='flex' justifyContent='center' mt={2}>
        <Signin />
      </Box>
    
    </Box>
   
    <Box display='flex' style={{ backgroundColor: 'transparent', opacity: 1 }} >
        <Footerbar />
      </Box>
      </>
  );
}

export default App;
