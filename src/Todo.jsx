import { Container, Input, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import TodoList from './TodoList';
import './todo.css';

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: false },
  ]);

  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = event => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);

      setLocalStorageData('todos', [
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle('');
    }
  };

  // export default const deleteTodo = index => {
  //   const clonedTodos = [...todos];
  //   clonedTodos.splice(index, 1);
  //   setTodos(clonedTodos);
  //   setLocalStorageData('todos', clonedTodos);
  // };

  // const setCheckedTodoHandler = index => {
  //   const clonedTodos = [...todos];
  //   clonedTodos.splice(index, 1) , {
  //     ...clonedTodos[index],
  //     completed: !clonedTodos[index].completed
  //   });
  //   setTodos(clonedTodos);
  //   setLocalStorageData('todos', clonedTodos);
  // }

  return (
    <Container className="main">
      <Typography component="div">
        <h1>Todo app</h1>
        <Input
          // eslint-disable-next-line react/jsx-boolean-value
          fullWidth={true}
          className="cls-input"
          type="text"
          placeholder="Введите задачу"
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />

        <TodoList todos={todos} />
      </Typography>
    </Container>
  );
}
