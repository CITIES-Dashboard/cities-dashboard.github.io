// disable eslint for this file
/* eslint-disable */

import { Facebook, LinkedIn, Instagram, Twitter } from '@mui/icons-material/';
import { Grid, Container } from '@mui/material';
import CustomLink from '../CustomLink';

export default function SocialHandleGrid() {
    return (
        <Grid alignItems='center' container>
            <CustomLink href='https://twitter.com/cities_nyuad/' text={<Twitter sx={{ fontSize: '2rem' }} />} />
            <CustomLink href='https://www.linkedin.com/company/center-for-interacting-urban-networks/' text={<LinkedIn sx={{ fontSize: '2rem' }} />} />
            <CustomLink href='https://www.facebook.com/nyuad.cities/' text={<Facebook sx={{ fontSize: '2rem' }} />} />
            <CustomLink href='https://www.instagram.com/cities.nyuad/' text={<Instagram sx={{ fontSize: '2rem' }} />} />
            <CustomLink href="mailto:nyuad.cities@nyu.edu" text="nyuad.cities@nyu.edu" />
        </Grid>
    );
}
