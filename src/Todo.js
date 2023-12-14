import React, { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.newTodo.value;
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input name="newTodo" type="text" placeholder="Add todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
