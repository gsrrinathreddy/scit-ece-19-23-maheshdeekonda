import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://th.bing.com/th/id/OIP.mtsk3fQ_BRemFidhkel3dAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Github"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Github
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Git: Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows. 
           <br></br>
          GitHub: GitHub is a web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features.  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}
