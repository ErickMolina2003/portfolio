import { Grid, List, ListItem } from '@mui/material';

export function Knowledge() {
  return (
    <>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={12} md={'auto'}>
          <h1 className='achievement-title'>Technologies & Tools</h1>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <List
            aria-labelledby='decorated-list-demo'
            style={{ display: 'flex' }}
          >
            <ListItem className='list-item'>
              <img
                src='src\assets\vue.png'
                alt='Png'
                width={'50px'}
                style={{ opacity: 0.5, filter: 'grayscale(1)' }}
              />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\angular.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\firebase.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\js.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\mongo.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\mysql.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\nextjs.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\node.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\oracle.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\postgres.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\react-grey.svg' alt='Png' width={'50px'} />
            </ListItem>
            <ListItem className='list-item'>
              <img src='src\assets\ts.svg' alt='Png' width={'50px'} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
