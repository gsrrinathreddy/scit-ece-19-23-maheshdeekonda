import Card7 from '../../Components/Card7';
import { Grid } from '@mui/material';
import Card8 from '../../Components/Card8';

import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Projects(){
  const [loader,setLoader] = useState(true);
  const [projects,setProjects] = useState(null);

  const connectToServer = async  () => axios.get('http://localhost:8000/Projects')
                                          .then(res=>{
                                      
                                              console.log(res.data);
                                              setProjects(res.data);
                                              setLoader(false)
                                          }).catch(err=>console.log(err))
useEffect(()=>{
 connectToServer();
},[])

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