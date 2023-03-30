import ProfileCard from '../../components/profileCard/index';

import { Box ,useTheme } from '@mui/material';
import PC1 from '../../images/PC1.jpg';
import PC2 from '../../images/pc2.jpg';
import PC3 from '../../images/pc3.jpg';
import PC4 from '../../images/pc4.jpeg';


function App() {
  const theme = useTheme();
  return (
  
    <>
    <Box sx={{
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
  gap: '16px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    '& > div': {
      width: '100%'
    }
  }
}}>
    <Box >
    <ProfileCard 
           image= {PC1}
        title="Modern"
       
 
        description="As Uber works through a huge amount of internal  turmoil."
      />
    </Box>
    <Box>
    <ProfileCard 
         image ={PC2}
        title=" Scandinavian"
    
        description="Music is something that everyone has their own specific opinion about."
      />
    </Box>
    
   <Box>
   <ProfileCard 
        image={PC3}
        title="Minimalist"
  
    
        description="Different people have different taste, and various types of music."
      />
   </Box>
     
       <Box>
       <ProfileCard 
        image={PC4}
        title="Gothic"
     
 
        description=" Why would anyone pick blue over pink? Pink is obviously a better color."
      />
       </Box>
     
   </Box>
   
    </>
  );
};
export default App;