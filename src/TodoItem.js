import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import './todo.css';

export default function TodoItem({ title, completed, deleteTodo, setChckedTodoHandler }) {

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <label>
        <Checkbox 
        onChange={setChckedTodoHandler} 
        checked={completed}
        />
        <span>{title}</span>
        <button className='delete_button' onClick={deleteTodo}>
          <DeleteIcon />
        </button>
      </label>
    </div>
  );
}
