export const useCounter = ({ dispatch, type, val }) => {
  if (!val) {
    return dispatch({ type: type });
  } else {
    return dispatch({ type, val });
  }
};
