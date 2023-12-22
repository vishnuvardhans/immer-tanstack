import React from 'react';
import useTodoStore from './datas.js/immerStore';

const TodoComponent = () => {
  const { todos, updateTodoTitle, toggleTodoDone,items, addItem, updateItemText, removeItem } = useTodoStore();

  return (
    <div>
      <ul>
        {Object.values(todos).map((todo) => {
            console.log(todos,todo)
            return(
          <li key={todo.id}>
            {todo.title} - {todo.done ? 'Done' : 'Not Done'}
            <button onClick={() => updateTodoTitle(todo.id, 'New Title')}>
              Update Title
            </button>
            <button onClick={() => toggleTodoDone(todo.id)}>
              Toggle Done
            </button>
          </li>
        )})}
        
      </ul>
      <ul>
        {items&&items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => updateItemText(item.id, 'Updated Text')}>
              Update Text
            </button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
