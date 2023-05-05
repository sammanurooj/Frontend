import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';

export default function MultiActionAreaCard({ image, title, description, deleteProject, editProject, previewProject }) {
  const handlePreview = () => {
    previewProject();
  };

  return (
    <>
      <Box sx={{ display: 'flex', gap: 0 ,justifyContent: 'flex-end' }} >
        <IconButton color="error" aria-label="delete project" onClick={deleteProject}>
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" aria-label="edit project" onClick={editProject}>
          <EditIcon />
        </IconButton>
      </Box>
      <Card sx={{ width: '280px' }}>
        <CardActionArea sx={{ position: 'relative' }} onClick={handlePreview}>
          <CardMedia component="img" height="140" image={image} alt={title} sx={{ borderRadius: 2 }} />
          <CardContent sx={{ height: '150px', overflow: 'hidden' }}>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
            {description && (
              <Tooltip title={description.length > 50 ? description : ''}>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {description}
                </Typography>
              </Tooltip>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
