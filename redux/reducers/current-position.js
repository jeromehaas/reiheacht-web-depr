const initialState = {
  currentPosition: 'home',
};

const currentPosition = ((state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_POSITION': {
      return {
        ...state,
        currentPosition: action.payload,
      };
    }
    default:
      return initialState;
  }
});

export default currentPosition;
