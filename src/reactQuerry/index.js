import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('todos', () =>
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => response.data)
  );

  

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
