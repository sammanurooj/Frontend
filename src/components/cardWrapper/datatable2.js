import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";


import TableData2 from '../dataTables/dataTable2'

const index = () => {
  return (
    <Box sx={{ borderRadius:4, boxShadow: 3,width:"100%"}}>
      <Card>
        <CardContent sx={{paddingTop:'30px',marginRight:"0px"}}>
          
          <TableData2 />
        </CardContent>
      </Card>
    </Box>
  )
}

export default index
