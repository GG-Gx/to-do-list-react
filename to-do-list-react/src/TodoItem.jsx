import  React from 'react';



function TodoItem({completed, id, title, deleteTodo, toggleTodo,editTodo, todo}) {

  return(
    <>
    <div className="todo-item">
    <label>
    <input 
      type="checkbox"  
      checked={completed}
      onChange={e => toggleTodo(id, e.target.checked)}/>
      {title}
    </label>
    <button onClick={()=> editTodo(id)} className="btn btn-edit">Edit</button>
    <button onClick={()=> deleteTodo(id)} className="btn btn-delete">Delete</button>
    </div>

    </>
  )
}

export default TodoItem;
