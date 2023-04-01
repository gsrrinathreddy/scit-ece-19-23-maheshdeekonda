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
          image="https://th.bing.com/th/id/OIP.TYiaiDniIlfQbx7TIlMDqgHaD8?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Project1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Project1
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Recognition Of Sign language Using Neural Networks By MATLAB 

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}