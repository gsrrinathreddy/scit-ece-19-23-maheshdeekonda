import { Typography } from '@mui/material';


import pi from "./Mahesh.jpg";
import {useState,useEffect} from 'react';
import axios from 'axios';





   
export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/AboutMe')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(

        <>
        <img src={pi}/>

      <div>
          <h3><Typography>Name: Deekonda Mahesh</Typography></h3>
          <h3><Typography>Father Name: Komuraiah  </Typography></h3>
          <h3><Typography>Mother Name: Revathi</Typography></h3>
          <h3><Typography>Email: maheshdeekonda45@gmail.com</Typography></h3>
          <h3><Typography>Phone No: 9542472624</Typography></h3>

        </div>  
        </>
        
    )
}