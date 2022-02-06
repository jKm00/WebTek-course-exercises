import React, { useState } from 'react';
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
    return (
        <div className='todos'>
            {todos.map(todo => {
                return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
            })}
        </div>
    );
}
