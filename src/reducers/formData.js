const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case "UPDATED_TODO":
      console.log(action?.payload, "data");

      const result = state.list;
      result.map((value) =>
        value.data.id === action?.payload?.element?.id
          ? (value.data = action.payload.element)
          : value.data
      );

    case "DELETE_TODO":
      const updatedArray = [...state.list];
      return {
        ...state,
        list: updatedArray.filter(
          (element) => element.data.id !== action?.payload?.ind
        ),
      };

      default:
      return state;
  }
};

export default todoReducers;
