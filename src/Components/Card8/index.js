import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.VZROFSGZ_OivUZf55Hh25gHaDs?w=326&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Project2"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Project2
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Low Cost IOT Sensor System For Real Time Remote Monitoring 
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}