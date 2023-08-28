import './App.css';
import { Grid } from '@mui/material';
import HeaderSection from './components/header/HeaderSection';
import Achievements from './components/achievements/Achievements';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { Knowledge } from './components/Knowledge/Knowledge';
import NavBar from './components/navbar/NavBar';

// https://olaolu.dev/

function App() {
  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid
          id='section-header'
          item
          className='main-section header-section-bg'
          xs={12}
          style={{ padding: '2rem' }}
        >
          <HeaderSection />
        </Grid>
        <Grid
          id='section-knowledge'
          item
          className='main-section'
          xs={12}
          style={{ padding: '2rem' }}
        >
          <Knowledge />
        </Grid>
        <Grid item className='main-section' xs={12} style={{ padding: '2rem' }}>
          <Achievements />
        </Grid>
        <Grid
          id='section-experience'
          item
          className='main-section experience-bg'
          xs={12}
          style={{ padding: '2rem' }}
        >
          <Experience />
        </Grid>
        <Grid
          id='section-contact'
          item
          className='main-section'
          xs={12}
          style={{ padding: '2rem' }}
        >
          <Contact />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
