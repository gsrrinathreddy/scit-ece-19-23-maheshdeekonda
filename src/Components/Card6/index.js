import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://th.bing.com/th/id/OIP.wmVr1W0nuF_M_OswcpjyjgHaEc?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Java Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Java
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}