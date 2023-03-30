import BookingCard from '../../components/cards/index';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

import { Box ,useTheme } from '@mui/material';


function App() {
  const theme = useTheme();
  return (
  
    <>
    <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column' ,md: 'row' },
        gap:'16px',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
      
        }
      }}>
    <Box >
    <BookingCard
        title="Booking card"
        icon={< AccountBalanceRoundedIcon />}
        count={281}
        description="+55% than lask week"
      />
    </Box>
    <Box>
    <BookingCard
        title=" Users 100+ test users"
        icon={<AccessTimeFilledRoundedIcon/>}
        count={2,300}
        description="+3 than last month"
      />
    </Box>
    
   <Box>
   <BookingCard
        title="Followers"
        icon={< AccountCircleRoundedIcon/>}
        count={+91}
        description="+3 than last month"
      />
   </Box>
     
       <Box>
       <BookingCard
        title="Followers"
        icon={< AccountCircleRoundedIcon/>}
        count={+91}
        description=" Just updated"
      />
       </Box>
     
   </Box>
   
    </>
  );
};
export default App;