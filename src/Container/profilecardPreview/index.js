import { Box, useTheme } from '@mui/material';
import ProjectForm from '../../layout/Forms/editProject';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const theme = useTheme();
  const token = localStorage.getItem('this is token');
  const navigate = useNavigate();

  const fetchProject = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/userproject/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data


  };
 
  const { id } = useParams();
  console.log('id',id)

  const { data: projectData, isLoading } = useQuery(['project', id], () =>
    fetchProject(id)
  );
console.log("project id",id)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: '16px',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            '& > div': {
              width: '100%',
            },
          },
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            '& img': {
              maxWidth: '100%',
              height: 'auto',
              marginBottom: '16px',
              marginTop: '16px',
            },
            '& h1': {
              fontSize: '24px',
              margin: '0',
            },
            '& p': {
              fontSize: '16px',
              margin: '0',
            },
          }}
        >
          <img src={projectData.data.pic} alt={projectData.title} />
          <h1>{projectData.data.title}</h1>
          <p>{projectData.data.description}</p>
        </Box>

      </Box>
    </>
  );
}

export default App;
