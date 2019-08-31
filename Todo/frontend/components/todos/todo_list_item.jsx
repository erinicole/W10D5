import React from 'react';

const TodoListItem = ({todo}) => {
return (
  <ul>
    <li>
      Todo: {todo.title}
    </li>
    <li>
      Notes: {todo.body}
    </li>
    <li>
      Done? {todo.done ? 'Yes' : 'No'}
    </li>
  </ul>
)};

export default TodoListItem;

