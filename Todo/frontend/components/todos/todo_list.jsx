import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  render() {
   return (
      <div>
        {this.props.todos.map( todo => 
          <TodoListItem todo={todo} key={todo.id} />)
        }   
      </div>
   ) 
  }
}



export default TodoList;



