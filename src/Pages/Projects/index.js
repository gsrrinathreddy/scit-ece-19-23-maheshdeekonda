import Card7 from '../../Components/Card7';
import { Grid } from '@mui/material';
import Card8 from '../../Components/Card8';


export default function Projects(){
    return(
      <>
        <Grid container sx={{ p: 3 }} spacing={4}>
          <Grid item xs={4}>
        <Card7></Card7>
        </Grid>
        </Grid>
        <Grid item xs={4}>
        <Card8/>
        </Grid>
        
       </>
    )
}