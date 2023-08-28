import { Grid } from '@mui/material';
import './Experience.css';

export default function Experience() {
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Grid item xs={12} md={'auto'}>
          <h1 className='experience-title'>
            Over the <br />
            years,
          </h1>
          <p className='experience-description'>
            I have built products for companies and businesses around the globe
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
            Currently, I work at Shopify as a Senior Frontend Engineer crafting
            thoughtful and inclusive experiences that adhere to web standards
            for over 3 million merchants across the world. Before now, I was
            Principal Frontend Engineer at hellotax, where I worked on a suite
            of tools and services tailored towards automated VAT compliance for
            multi-channel sellers in Europe. Prior to hellotax, I was Senior
            frontend engineering consultant with Pixel2HTML, building JavaScript
            applications and interfaces for orgs and individuals. I once also
            led the frontend team at Conectar, an e-learning startup through
            building multiple React applications into a single robust learning
            platform.
          </p>
        </Grid>
        <Grid item xs={12} md={'auto'}>
          <span className='experience-img'></span>
        </Grid>
      </Grid>
    </>
  );
}
