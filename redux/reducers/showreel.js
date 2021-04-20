const initialState = {
  visible: false,
};

const showreel = (state = initialState, actino) => {
  switch (actino.type) {
    case 'TOGGLE_SHOWREEL':
      return {
        visible: !state.visible,
      };
    default:
      return {
        ...state,
      };
  }
};

export default showreel;
