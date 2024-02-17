import  React from 'react';



function TodoItem({completed, id, title, deleteTodo, toggleTodo, todo}) {

  return(
    <>
    <label>
    <input 
      type="checkbox"  
      checked={completed}
      onChange={e => toggleTodo(id, e.target.checked)} // Correct typo in onChange attribute
    />
      {title}
    </label>
    <button onClick={()=> deleteTodo(id)} className="btn btn-delete">Delete</button> 
    </>
  )
}

export default TodoItem;
