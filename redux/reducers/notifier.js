const initialState = {
  visible: false,
  message: '',
  type: null,
};

const notifier = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NOTIFIER':
      return {
        ...state,
        visible: action.payload.visible,
        message: action.payload.message,
        type: action.payload.type,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notifier;
