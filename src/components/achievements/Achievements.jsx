import { Grid, List, ListItem } from '@mui/material';
import './Achievements.css';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AddIcon from '@mui/icons-material/Add';
import SchoolIcon from '@mui/icons-material/School';

export default function Achievements() {
  return (
    <>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={'auto'}>
          <span className='avatar-achievement-container'></span>
        </Grid>
        <Grid item xs={'auto'}>
          <List aria-labelledby='decorated-list-demo'>
            <ListItem className='list-item'>
              <WorkspacePremiumIcon className='icon-list' />
              x1 Web Developer Champion UNAH
            </ListItem>
            <ListItem className='list-item'>
              <WorkspacePremiumIcon className='icon-list' />
              x2 highest GPA
            </ListItem>
            <ListItem className='list-item'>
              <AddIcon className='icon-list' />3 Years of Experience
            </ListItem>
            <ListItem className='list-item'>
              <SchoolIcon className='icon-list' />
              Software engineering senior student
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Grid item>
          <h1 className='achievement-title'>Engineering</h1>
          <p className='achievement-description'>
            In building JavaScript applications, I am equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </Grid>
        <Grid item>
          <h1 className='achievement-title'>Engineering</h1>
          <p className='achievement-description'>
            In building JavaScript applications, I am equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </Grid>
      </Grid>
    </>
  );
}
