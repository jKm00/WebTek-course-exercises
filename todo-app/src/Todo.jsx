import React from 'react';

export default function Todo({ todo, toggleTodo }) {

    function handleToggle() {
        toggleTodo(todo.id)
    }

    return (
        <label className='todo'>
            <input type='checkbox' checked={todo.complete} onChange={handleToggle} />
            {todo.title}
        </label>
    )
}
