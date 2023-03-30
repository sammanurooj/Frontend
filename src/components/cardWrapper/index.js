import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";
import  Table from '../Table/index'

//import App from '../../Container/statisticCards/completeTask';


const index = () => {
  return (


    <Box sx={{ borderRadius: 2,width: { xs: '100%', md: '100%' }}}>
  
    <Card>
   
    <CardContent >
   
<Table/>

    </CardContent>

    </Card>



    </Box>
      
  
  )
}

export default index
