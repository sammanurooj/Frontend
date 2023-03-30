import { Box, useTheme } from '@mui/material';
import MyAppBar from '../../components/AppBar/index';
import Footerbar from '../../components/Foooter/index';
import Signin from '../../layout/Forms/signin';
import Container from '@mui/material/Container';

function App() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      style={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <Box display='flex'  justifyContent='center' mt={5}>
        <MyAppBar />
      </Box>

      <Box display='flex' justifyContent='center' mt={10}>
        <Signin />
      </Box>
      <Box display='flex'>

<Footerbar/>

</Box>
    </Box>
  );
}

export default App;
