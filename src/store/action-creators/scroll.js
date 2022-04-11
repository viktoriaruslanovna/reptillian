export const scrollLock = () => {
  return dispatch => {
    dispatch({
      type: 'SCROLL_LOCK',
    });
  };
};

export const scrollAllow = () => {
  return dispatch => {
    dispatch({
      type: 'SCROLL_ALLOW',
    });
  };
};
