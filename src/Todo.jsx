import { Container, Input, Typography, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './todo.css';




export default function Todo() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.todos) || []);



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoTitle,
        completed: false,
      },
    ]);
    setTodoTitle('');
  };

  const deleteTodo = index => {
    const clonedTodos = [...todos];
    clonedTodos.splice(index, 1);
    setTodos(clonedTodos);
  }

  const setChckedTodoHandler = index => {
    const clonedTodos = [...todos];
    clonedTodos.splice(index, 1, {
      ...clonedTodos[index],
      completed: !clonedTodos[index].completed
    });
    setTodos(clonedTodos);
  }

  return (
    <Container>
      <Typography component='div'>
        <h1>Todo app</h1>
        <div className="todo">
          <Input
            fullWidth={true}
            type="text"
            placeholder="Enter a task"
            value={todoTitle}
            onChange={event => setTodoTitle(event.target.value)}
            onKeyPress={e => e.key === 'Enter' ? addTodo() : null}
          />
          <Button
            onClick={addTodo}
            variant="contained"
            color="primary">
            Add TODO
          </Button>
        </div>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          setChckedTodoHandler={setChckedTodoHandler}
        />
      </Typography>
    </Container>
  );
}
