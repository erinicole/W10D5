import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import {receiveTodo, receiveTodos} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;


  ReactDOM.render(<Root store={store}/>, root)

});


