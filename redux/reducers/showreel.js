const initialState = {
  visible: false,
};

const showReel = (state = initialState, actino) => {
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

export default showReel;
