import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import './style.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
let uid = 0

export default function App() {

  const [todos, setTodos] = useState([])
  const todoTitleRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTask(event) {
    const title = todoTitleRef.current.value
    uid++
    if (title === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uid, title: title, complete: false}]
    })
    todoTitleRef.current.value = null
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function clearTasks() {
    const newTodos = [...todos]
    const notCompleted = newTodos.filter(todo => !todo.complete)
    setTodos(notCompleted)
  }

  return (
    <>
      <p>Task left: {todos.filter(todo => !todo.complete).length}</p>
      <div className='menu'>
        <input ref={todoTitleRef} type='text' placeholder='Task title...'></input>
        <button onClick={addTask}>Add task</button>
        <button onClick={clearTasks}>Clear completed tasks</button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}
