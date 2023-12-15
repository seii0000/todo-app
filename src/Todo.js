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
    setTodos([...todos, { text: newTodo, completed: false }]);
    event.target.reset();
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
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
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleCompletion(index)}>
              {todo.completed ? "Incomplete" : "Complete"}
            </button>

            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
