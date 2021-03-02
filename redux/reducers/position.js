const initialState = {
  currentPosition: 'start',
}

const position = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POSITION':
      return {
        ...state, 
        currentPosition: action.payload
      }
      default: return state;
  }
}

export default position;