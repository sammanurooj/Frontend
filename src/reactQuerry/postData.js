import { useMutation } from 'react-query';
import { queryCache } from 'react-query';
import React, { useState } from 'react';
import axios from 'axios';

function AddTodoForm() {
  const [inputValue, setInputValue] = useState('');
  const mutation = useMutation(
    (newTodo) => {
      // make API call to add the new todo to the server
      return axios.post('https://jsonplaceholder.typicode.com/todos', { todo: newTodo })
        .then((res) => res.data);
    },
    {
      onSuccess: (data) => {
        console.log('New todo:', data.todo);
        // Invalidate the todos query to refetch the latest data
        queryCache.invalidateQueries('todos');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Adding...' : 'Add Todo item'}
      </button>
    </form>
  );
}

export default AddTodoForm;
