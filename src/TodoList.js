import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo, setChckedTodoHandler }) {
  return (
    <div>
      {todos.map((item, index) => (
        <TodoItem 
          deleteTodo={() => { deleteTodo(index) }} 
          setChckedTodoHandler={() => setChckedTodoHandler(index)} 
          key={item.id} 
          {...item} 
        />
      ))}
    </div>
  );
}
