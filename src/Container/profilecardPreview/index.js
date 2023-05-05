import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const theme = useTheme();
  const token = localStorage.getItem('this is token');

  const fetchProject = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/userproject/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };
 
  const { id } = useParams();
  const { data: projectData, isLoading } = useQuery(['project', id], () =>
    fetchProject(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CardMedia
        component="img"
        src={projectData.data.pic}
        alt={projectData.title}
        sx={{ height: '100%', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          {projectData.data.title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {projectData.data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default App;
