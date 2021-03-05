const initialState = {
  start: {
    visible: true
  },
  services: {
    visible: false
  },
  projects: {
    visible: false
  },
  employees: {
    visible: false
  },
  contact: {
    visible: false
  }
}

const textBlocks = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_BLOCKS':
      return {
        ...state, 
        ...action.payload
      }
  }
  return {
    ...state
  }
}

export default textBlocks;