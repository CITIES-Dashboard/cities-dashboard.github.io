// disable eslint for this file
/* eslint-disable */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LinkContext } from '../../ContextProviders/LinkContext';
import { Box, Typography, Container, Paper } from '@mui/material';
import { IoReturnDownBack } from 'react-icons/io5';

import citiesLogo from '../../cities-logo.png';

import './Header.css';

export default function Header() {
  const [underlineLink] = useContext(LinkContext);

  return (
    <Box width='100%' sx={{ m: 0 }} backgroundColor='customAlternateBackground'>
      <Box sx={{ backgroundColor: 'nyuPurple', height: '10vh' }} />
      <Container sx={{ pb: 3 }} backgroundColor='customAlternateBackground'>
        <Paper
          elevation={4}
          sx={{
            width: '12vh', height: '12vh', ml: 0, mt: '-6vh', mb: 3, transition: '0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)'
            },
          }}
        >
          <a href='/'>
            <img
              style={{ width: '100%', borderRadius: '0.5rem' }}
              src={citiesLogo}
              title='CITIES Dashboard' alt='CITIES Dashboard' />
          </a>
        </Paper>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h2" color="text.primary" sx={{ fontWeight: 'medium' }}>
            CITIES DASHBOARD
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Spearheading sustainability and well-being data visualization at NYU
            Abu Dhabi
          </Typography>
        </Box>

        <Box sx={{ display: 'inline-block', mr: 2 }}>
          <Link to="/">
            <Typography
              className={
                underlineLink === 'home' ? 'navLink active' : 'navLink'
              }
              variant="body1"
              sx={{ fontWeight: 'medium' }}
              color="text.secondary"
            >
              {underlineLink === 'home' ? (
                'HOME'
              ) : (
                <div>
                  <IoReturnDownBack
                    size={17}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <span> BACK TO HOME</span>
                </div>
              )}
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'inline-block', mr: 2 }}>
          <Link to="/about">
            <Typography
              className={
                underlineLink === 'about' ? 'navLink active' : 'navLink'
              }
              variant="body1"
              sx={{ fontWeight: 'medium' }}
              color="text.secondary"
            >
              ABOUT
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
