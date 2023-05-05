import NotificationBox from '../../components/notification';
 import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

import { Box ,useTheme } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';


export default function App() {
    const theme = useTheme();
    const token = localStorage.getItem("this is token");
    const { isLoading, error, data } = useQuery("notificationData", () =>
      axios
        .get("http://localhost:5000/api/notification/notifications", {
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
  
    const notificationData =
      data && Array.isArray(data.data.users.rows)
        ? data.data.users.rows.map((user) => ({
            id: user.id,
            message: user.message.split("|"),
            date: user.date,
          }))
        : [];

        console.log("list items data",notificationData)
  
    return (
        <>
       
       {data && <NotificationBox notificationData={notificationData} />}
      </>
    );
  }