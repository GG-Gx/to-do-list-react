import React, { useState } from "react";
import "./index.css";

function TodoItem({ completed, id, title, deleteTodo, toggleTodo, editTodo, todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);

  const startEditing = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() !== "") {
      editTodo(id, editValue); // Update todo with the new title
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(title); // Reset to original title
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <label
          >
          <input
          className="transparent-input"
            type="text"
            value={editValue}
            onChange={handleEditChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveEdit();
              if (e.key === "Escape") handleCancelEdit();
            }}
            autoFocus
          />
        </label>
          <button onClick={handleSaveEdit} className="btn btn-save">
            Save
          </button>
          <button onClick={handleCancelEdit} className="btn btn-cancel">
            Cancel
          </button>
        </div>
      ) : (
        <label className={`todo-item ${completed ? "completed" : ""}`}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
      )}
      <button onClick={startEditing} className="btn btn-edit">
        Edit
      </button>
      <button onClick={() => deleteTodo(id)} className="btn btn-delete">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
