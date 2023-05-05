import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const footerStyle = {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    width: '100%',
    position: 'relative',
    marginTop: 'auto',
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#666',
    fontSize: '14px',
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const iconStyle = {
    color: '#666',
    marginLeft: '16px',
  };

  return (
    <BottomNavigation style={footerStyle}>
      <Box style={leftSectionStyle}>
        <span>© 2023, by samman for practice project</span>
      </Box>
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
    </BottomNavigation>
  );
};

export default Footer;
