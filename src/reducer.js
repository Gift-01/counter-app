export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state > 0) {
        return state - 1;
      } else {
        return 0;
      }
    case "RESET":
      return 0;
    case "SET VALUE":
      return action.val;
    default:
      return state;
  }
};
