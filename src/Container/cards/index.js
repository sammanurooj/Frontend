import BookingCard from '../../components/cards/index';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import { Box, useTheme } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import AvTimerIcon from '@mui/icons-material/AvTimer';
function App() {
  const theme = useTheme();
  const token = localStorage.getItem('this is token');
  const { isLoading, error, data } = useQuery('cardData', () =>
    axios
      .get('http://localhost:5000/api/analysiscard/Card', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const cardData =
    data && Array.isArray(data.data.users.rows)
      ? data.data.users.rows.map((user) => ({
          id: user.id,
          title: user.title,
          count: user.count,
          description: user.status,
        }))
      : [];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        gap: '16px',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      }}
    >
      {cardData.map((rowData) => (
        <Box
          key={rowData.id}
          sx={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          <BookingCard
            icon={<AvTimerIcon fontSize="large"/>}
            title={rowData.title}
            count={rowData.count}
            description={rowData.description}
          />
        </Box>
      ))}
    </Box>
  );
}

export default App;
