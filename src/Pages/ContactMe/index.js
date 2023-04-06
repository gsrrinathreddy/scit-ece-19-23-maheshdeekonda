import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import {useState,useEffect} from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ContactMe() {
  const [loader,setLoader] = useState(true);
    const [ContactMe,setContactMe] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/ContactMe')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setContactMe(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>Email</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Linkedin</Item>
        </Grid>
      </Grid>
    </Box>
  );
}