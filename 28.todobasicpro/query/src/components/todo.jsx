import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            removeTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, index, removeTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
}

export default TodoList;
