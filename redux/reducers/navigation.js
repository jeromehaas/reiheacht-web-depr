const initialState = {
  mobile: {
    isVisible: false
  }
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MOBILE_NAVIGATION':
      return {
        ...state, 
        mobile: { 
          isVisible: action.payload === false ? true : false
        }
      }
      default: 
      return state;
    
  }
}


export default navigation;