import React from "react";
import TodoItem from "./TodoItem";

function TodoList ({todos, toggleTodo, deleteTodo, editTodo}) {

  return (
    <ul className="list">
      {todos.length === 0 && "Add a new item"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      })}
    </ul>
  )
 }

export default TodoList;