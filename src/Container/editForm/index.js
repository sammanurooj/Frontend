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
        {/* Add some child components here */}
      </Box>

      {projectData.data && (
        <ProjectForm
          initialValues={projectData.data}
          onSubmit={(values) => {
            axios
              .put(
                `http://localhost:5000/api/userproject/update/${projectData.data.id}`,
                values,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then(() => {
                console.log('Project updated successfully');
                navigate('/profile');
              })
              .catch((error) => console.error(error));
          }}
          onCancel={() => navigate('/profile')}
        />
      )}
    </>
  );
}

export default App;
