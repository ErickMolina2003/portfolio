import { Grid } from '@mui/material';
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {
  return (
    <>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={'auto'}>
          <h1 className='achievement-title'>Send me a message!</h1>
          <p className='contact-description' style={{textAlign: 'center'}}>
            Got a question or proposal, or just want <br /> to say hello? Go
            ahead.
          </p>
        </Grid>
        <Grid
          className='icon-container'
          container
          spacing={2}
          alignItems='center'
          justifyContent='center'
        >
          <Grid item xs={'auto'}>
            <a
              href='https://www.linkedin.com/in/erick-molina-aa1864222/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon className='linkedIn'></LinkedInIcon>
            </a>
          </Grid>
          <Grid item xs={'auto'}>
            <a
              href='https://github.com/ErickMolina2003'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon className='github' />
            </a>
          </Grid>
          <Grid item xs={'auto'}>
            <a
              href='https://www.instagram.com/stable.erick/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='instagram' />
            </a>
          </Grid>
          <Grid item xs={'auto'}>
            <a
              href='https://www.facebook.com/eralejo.molinagarcia'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon className='facebook' />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
