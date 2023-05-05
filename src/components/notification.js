import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";

function Notification({ notificationData }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile");
  }
  
  if (!notificationData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>Notification</h3>
      <Box sx={{ borderRadius: 5, width: "100%" }}>
        <Card sx={{ backgroundColor: "#f5f5f5" }}>
        <CardContent>
         
  {notificationData.map((rowData) => (
    <ul
       key={rowData.id}
  style={{
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    listStyleType: "none",
    marginTop: "10px",
    marginBottom: "30px",
    paddingLeft: "20px",
  }}
>
    <li
      key={rowData.id}
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "10px",
        marginBottom: "10px",
       
        paddingBottom: "10px",
      }}
    >
      <span>{rowData.message}</span>
      <span>{rowData.date}</span>
    </li>
    </ul>
  ))}





         
        
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default Notification;