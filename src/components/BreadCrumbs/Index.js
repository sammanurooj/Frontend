import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import HouseIcon from '@mui/icons-material/House';
import { IconButton } from "@mui/material";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick} style={{ marginLeft: '250px' }}>
      <Breadcrumbs aria-label="breadcrumb" color="#808080">>
        <IconButton color="primary">
          <HouseIcon />
        </IconButton>
        <Link href="/profile"
          underline="hover"
          color="inherit"
      
        >
          DashBoard
        </Link>
   

      </Breadcrumbs>
    
   

    </div>
  );
}
