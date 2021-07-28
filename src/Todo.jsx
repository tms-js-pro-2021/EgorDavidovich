import { Container, Input, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import TodoList from './TodoList'

export default function Todo() {

    const [todos, setTodos] = useState([
        { id: 1, title: 'First todo', completed: false },
        { id: 2, title: 'Second todo', completed: false },
    ])

    const [todoTitle, setTodoTitle] = useState('')

    const addTodo = event => {
        if (event.key=== 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodoTitle('')
        }
    }



    return (
        <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <h1>Todo app</h1>
                <Container fixed>
                    <Input
                        type="text"
                        placeholder="Введите задачу"
                        value={todoTitle}
                        onChange={event => setTodoTitle(event.target.value)}
                        onKeyPress={addTodo}
                    />
                </Container>

                <TodoList todos={todos} />
            </Typography>
        </Container>
    );
}