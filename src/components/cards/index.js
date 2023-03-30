import { Card, CardContent, Typography, Box } from '@mui/material';
import { bgcolor, width } from '@mui/system';



const BookingCard = ({ title, icon, count, description }) => {
  return (
    
<Card sx={{width:'250px'}}>


      <CardContent>
      <Box display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Box >
            {icon}
          </Box>

          <Box display='flex' flexDirection='column'>
           <Box>
           <Typography variant="subtitle1">{title}</Typography>
           </Box> 
           <Box>
           <Typography variant="h5">{count}</Typography>
           </Box> 
          </Box>
        </Box>
        <Box><hr /></Box>
        <Box>
        <Typography variant="p">{description}</Typography>
        </Box>
        </Box>
      </CardContent>
</Card>
  
 
  );
};

export default BookingCard;