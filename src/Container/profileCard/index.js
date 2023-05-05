import { Box, useTheme } from '@mui/material';
import ProfileCard from '../../components/profileCard/index';
import ProjectForm from '../../layout/Forms/editProject';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
  const [editData, setEditData] = useState(null);
 
 
  const theme = useTheme();
  const token = localStorage.getItem('this is token');
  const navigate = useNavigate();
  const { isLoading, error, data, refetch } = useQuery('projectcardData', () =>
    axios
      .get('http://localhost:5000/api/userproject/project', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
  );

  

  const deleteProject = useMutation(
    (id) =>
      axios.delete(`http://localhost:5000/api/userproject/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        console.log('Project deleted successfully');
        refetch();
      },
    }
  );
  const handleEditProject = (rowData) => {
  
    navigate(`/edit/${rowData.id}`);
  };
  const  handlepreviewProject= (rowData) => {
  
    navigate(`/preview/${rowData.id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const projectcardData =
    data && Array.isArray(data.data.users.rows)
      ? data.data.users.rows.map((user) => ({
          id: user.id,
          pic: user.pic,
          title: user.title,
          description: user.description,
        }))
      : [];


  console.log('editData', editData);
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
        {projectcardData.map((rowData) => (
          <Box key={rowData.id}>
            <ProfileCard
              image={rowData.pic}
              title={rowData.title}
              description={rowData.description}
              deleteProject={() => deleteProject.mutate(rowData.id)}
              editProject={() => handleEditProject(rowData)}
              previewProject={() => handlepreviewProject(rowData)}
            />
          </Box>
        ))}



      </Box>

    </>
  );
}

export default App;
