import { Stack, Typography } from "@mui/material";
import { Box, } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = _ => {
    
    return (
        <>
            <Box color="blue"  >

                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}  >
                        <a href="/" target='_blank'>
                        <FacebookIcon backgroundcolor="primary" color="primary"/>
                        </a> 
                        <a href="/" target='_blank'>
                        <PinterestIcon  color="primary"/>
                        </a>
                        <a href="/" target='_blank'>
                        <TwitterIcon color="primary"/>
                        </a>
                        <a href="/" target='_blank'>
                        <InstagramIcon color="primary" />
                        </a>
                </Stack>
                <Stack align="center" mt="0.5rem">
                    <Typography variant="h5" >
                       &copy; Sai &copy;

                       
                    </Typography>
                </Stack>
                <Typography  mt="0.5rem" align="center" >All the Rights are Reserved
               
                </Typography>
               
            </Box>

        </>
    )
}

export default Footer;