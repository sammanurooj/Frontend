import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";
import  OrderList  from '../orders/index'


const index = () => {
  return (

    <Box sx={{ borderRadius: 3 , marginRight: "35px", width: { xs: '100%', md: '50%' }}}>
  
    <Card>
    <h4 style={{marginBottom:"3px"}}>Orders Review</h4>
   
    <CardContent>
    
<OrderList/>

    </CardContent>

    </Card>



    </Box>
      
  )
}

export default index
