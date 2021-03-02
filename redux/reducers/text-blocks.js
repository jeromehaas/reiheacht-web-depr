const initialState = {
  start: {
    visible: false
  },
  services: {
    visible: false
  },
  projects: {
    visible: false
  },
  contact: {
    visible: false
  }
}

const textBlocks = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state, 
      }
  }
  return {
    ...state
  }
}

export default textBlocks;