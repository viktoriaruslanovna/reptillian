const initialState = {
  scroll: true,
};

export const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SCROLL_LOCK':
      return { scroll: false };

    case 'SCROLL_ALLOW':
      return {
        scroll: true,
      };

    default:
      return state;
  }
};
