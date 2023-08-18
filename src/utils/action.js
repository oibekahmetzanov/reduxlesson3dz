export const addTodo = (title) => {
    return(dispatch) => {
        return dispatch({type: 'ADD', title})
    }
}
export const deleteTodo = (id) => {
    return (dispatch) =>{
      return dispatch({type: 'DELET', id})
    };
  };
  