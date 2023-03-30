import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";
import { AppBar, Toolbar } from '@mui/material'; // import the Toolbar component

import TableData from '../dataTables/index'

const index = () => {
  return (
    <Box sx={{ borderRadius:4, boxShadow: 3, width:"100%",marginTop:"100px"}}>
      <Card>
        <CardContent sx={{paddingTop:'30px',marginRight:"10px"}}>
          <AppBar position="static" sx={{backgroundColor: '#1976d2',borderRadius:2}}>
            <Toolbar>
              
              <div>Author Table</div>
            </Toolbar>
          </AppBar>
          <TableData />
        </CardContent>
      </Card>
    </Box>
  )
}

export default index
