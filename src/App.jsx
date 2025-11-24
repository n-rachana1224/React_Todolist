import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    if (!todoText) return;
    const newTodo = {
      id: Date.now(),
      text: todoText,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    
    <div className="app">
      <h1>React To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
