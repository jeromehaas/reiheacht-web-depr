const initialState = {
  start: {
    visible: false,
    activeElement: '',
  },
  services: {
    visible: false,
    activeElement: '',
  },
  projects: {
    visible: false,
    activeElement: '',
  },
  contact: {
    visible: false,
    activeElement: '',
  },
};

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TILES':
      return {
        ...state,
        visible: action.payload,
      };
    case 'UPDATE_TILES_ELEMENTS':
      return {
        ...state,
        visible: action.payload,
      };
    default: return state;
  }
};

export default tiles;
