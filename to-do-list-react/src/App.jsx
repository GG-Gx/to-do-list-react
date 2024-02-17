import React, { useState, useEffect } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function editTodo(id) {
    const newTitle = prompt("Enter new title")
    if (newTitle === null || newTitle === "") return

    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, title: newTitle }
        }

        return todo
      })
    })
  }

  return (
    <>
    <h1 className="header">to-do-list</h1>
      <NewTodoForm onSubmit={addTodo} />
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
