import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='grids'>
                <Grid alignItems="center" item xs={12}>
                    <Box>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className='boxs'>
                            <Typography variant="h5" align="center" className='textos' gutterBottom>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='boxs'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='boxs'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center"  className='textos' gutterBottom  >Silas© 2020 Copyright:</Typography>
                        </Box>
                        <Box className='boxs'>
                            <a target="_blank" href="" rel="" className='textos'>
                                <Typography variant="subtitle2" gutterBottom align="center" >silas.tavares.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;