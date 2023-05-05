import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";

import TableData from '../../layout/Forms/createProject'

const index = () => {
  return (
    <Box sx={{  boxShadow: 3, width:"95%",marginTop:"20px",display: 'flex', marginLeft:"20px",}}>
     
        <Box sx={{paddingTop:'20px',marginLeft:"50px"}}>
          
          <TableData />
        </Box>
    
    </Box>
  )
}

export default index
