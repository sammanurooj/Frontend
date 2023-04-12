import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ image, title, description, deleteProject,editProject,previewProject}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} 
               sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={deleteProject}>
          Delete
        </Button>
        <Button size="small" color="primary" onClick={editProject}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={previewProject}>
          preview
        </Button>
      </CardActions>
    </Card>
  );
}
