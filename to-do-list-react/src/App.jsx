import React, { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return []; // Return empty array if nothing is in localStorage

    try {
      return JSON.parse(localValue); // Parse the stored JSON data
    } catch (error) {
      console.error("Error parsing localStorage data", error);
      return []; // Return empty array if there's an error parsing
    }
  });

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("ITEMS", JSON.stringify(todos)); // Store todos in localStorage
    }
  }, [todos]);

  function addTodo(title) {
    if (!title.trim()) return; // Ignore empty or whitespace-only input
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, newTitle) {
    if (newTitle == null || newTitle.trim() === "") return; // Check if newTitle is undefined or empty
  
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  }

  return (
    <>
    <div className="container">
      <h1 className="header">to-do-list</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
    </>
  );
}

export default App;
