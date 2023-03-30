import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";
//import  OrderList  from '../orders/index'

import Form from '../../layout/Forms/signin'
;

const index = () => {
  return (

    <Box sx={{ borderRadius: 2 ,width: { xs: '100%', md: '50%' }}}>
  
    <Card>
  
   
    <CardContent>
    
<Form />

    </CardContent>

    </Card>



    </Box>
      
  )
}

export default index
