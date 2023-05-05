import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";


import TableData from '../dataTables/index'

const index = () => {
  return (
    <Box sx={{ borderRadius:4, boxShadow: 3,width:"100%"}}>
      <Card>
        <CardContent sx={{paddingTop:'30px',marginRight:"0px"}}>
          
          <TableData />
        </CardContent>
      </Card>
    </Box>
  )
}

export default index
