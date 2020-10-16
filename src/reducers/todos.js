const initailState = {
  data: [],
};

const todos = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
          },
        ],
      };
    default:
      return state;
  }
};
export default todos;
