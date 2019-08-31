
export const allTodos = (state) => {
  let id_arr = Object.keys(state.todos);
  return id_arr.map( id => {
    return state.todos[id];
  });

};