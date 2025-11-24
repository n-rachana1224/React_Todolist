import React from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li style={{ 
      textDecoration: todo.isCompleted ? 'line-through' : 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }}>
      <span onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>
      <button 
        onClick={() => deleteTodo(todo.id)} 
        style={{ marginLeft: 'auto' }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
