export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

// This is adding/updating single todos
export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

// This will receive multiple todos and populate the store.
export const receiveTodos = (todos) => ({
      type: RECEIVE_TODOS,
      todos 
   });

   

