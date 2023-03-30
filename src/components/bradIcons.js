import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { HomeIcon } from "@mui/icons-material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
      <HomeIcon />
        <Link underline="hover" color="inherit" href="/">
          Dashboard
        </Link>
       


        
      </Breadcrumbs>
      <Typography color="text.primary">DashBoard</Typography>
    </div>
  );
}
