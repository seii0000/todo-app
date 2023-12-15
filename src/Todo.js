import React, { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [inputError, setInputError] = useState(false);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.newTodo.value;
    if (newTodo.trim() === "") {
      setInputError(true);
      return;
    }
    setInputError(false);
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
      {inputError && <p> Enter your a todo.</p>}
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
