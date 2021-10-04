export const addTodo = (data) => {
      return {
        type: "ADD_TODO",
        payload: {
          data: data
        },
      };
};

export const deleteTodo = (ind) => {
  return {
    type: "DELETE_TODO",
    payload: {ind }
  };
};

export const updateTodo = (element) => {
  return {
    type: "UPDATED_TODO",
    payload: {
      element
    }
  };
};