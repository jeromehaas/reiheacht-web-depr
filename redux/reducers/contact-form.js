const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  isSent: false,
  showError: false,
};

const contactForm = ((state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACTFORM_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'UPDATE_CONTACTFORM_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'UPDATE_CONTACTFORM_PHONE':
      return {
        ...state,
        phone: action.payload,
      };
    case 'UPDATE_CONTACTFORM_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    case 'SUBMIT_CONTACT_FORM':
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
        isSent: true,
        showError: false,
      };
    case 'SHOW_ERROR_FORM_VALIDATION':
      return {
        ...state,
        showError: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
});

export default contactForm;
