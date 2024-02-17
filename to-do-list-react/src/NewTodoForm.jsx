import React, { useState } from 'react';


  function NewTodoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("");
    function handleSumit(e) {
      e.preventDefault();
      if (newItem.length === "") return
      onSubmit(newItem);
      setNewItem("");
    }

    return (
  <form onSubmit={handleSumit} className="new-item-form">
  <div className="form-row">
    <label className="list" htmlFor="new-todo-input"></label>
    <input value={newItem} 
    onChange={e => setNewItem( e.target.value)} 
    type="text" 
    id="new-todo-input" 
    name="text" 
    autoComplete="off" />
    <button className="btn">Add</button>
  </div>
 </form>)
}

export default NewTodoForm;








