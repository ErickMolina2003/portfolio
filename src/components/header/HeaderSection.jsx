import { Grid, Stack } from '@mui/material';
import './HeaderSection.css';

export default function HeaderSection() {
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12} md={'auto'}>
          <Stack className='header-section' spacing={2}>
            <Grid item xs={12}>
              <h1 className='text-left'>
                <span className='major-title'>
                  Full Stack <br />
                  Developer
                </span>
                <span>.</span>
              </h1>
              <p className='major-description'>
                I like to craft solid and scalable software products with great
                user experiences.
              </p>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={'auto'}>
                <li>
                  Highly skilled at progressive enhancement, design systems & UI
                  Engineering.
                </li>
              </Grid>
              <Grid item xs={'auto'}>
                <li>
                  Proven experience building successful products for clients
                  across several countries.
                </li>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} md={'auto'} className='avatar-bg-container'>
          <span className='avatar-container'></span>
        </Grid>
      </Grid>
    </>
  );
}
