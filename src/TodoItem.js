import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import './todo.css';

export default function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const cls = ['todo'];

  if (checked) {
    cls.push('completed');
  }

  return (
    <div className={cls.join(' ')}>
      <label>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        <span>{title}</span>
        <button>
          <DeleteIcon />
        </button>
      </label>
    </div>
  );
}
