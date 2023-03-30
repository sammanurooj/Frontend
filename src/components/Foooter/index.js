import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const footerStyle = {
    
   

    bottom: 0,
  
    marginTop:'16px',
    display: 'flex',
    flexDirection: 'row',

  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#777',
    fontSize: '14px',
    


    
  };
  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '16px',
 
  
  };

  const iconStyle = {
    color: '#777',
    marginLeft: '8px',
    
  };

  return (
    <>
    <BottomNavigation style={footerStyle}>
      <Box style={leftSectionStyle}>
        <span>
          © 2023, made with by Creative Tim for a better web.
        </span>
      </Box>
      
    </BottomNavigation>

    <div style={rightSectionStyle}>
        <BottomNavigationAction
          label="Facebook"
          icon={<Facebook style={iconStyle} />}
        />
        <BottomNavigationAction
          label="Twitter"
          icon={<Twitter style={iconStyle} />}
        />
        <BottomNavigationAction
          label="Instagram"
          icon={<Instagram style={iconStyle} />}
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn style={iconStyle} />}
        />
      </div>
      </>
  );
};

export default Footer;
