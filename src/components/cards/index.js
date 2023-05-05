import { Card, CardContent, Typography, Box } from '@mui/material';
import { bgcolor, width } from '@mui/system';
import CountUp from 'react-countup';

const BookingCard = ({ title, icon, count, description }) => {

  const iconStyle = {
    color: 'red'
  };

  return (
    <Card sx={{width:'280px'}}>
      <CardContent>
        <Box display='flex' flexDirection='column'>
          <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Box style={{ color: '#0C4990'}}>
              {icon}
            </Box>

            <Box display='flex' flexDirection='column'>
              <Box sx={{ fontSize: '30px' }} >
                <Typography variant="subtitle1">{title}</Typography>
              </Box> 
              <Box  sx={{ fontSize: '30px', fontWeight: 'bold' }} >
                <CountUp end={count} duration={8} decimals={0} suffix="+"/>
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
