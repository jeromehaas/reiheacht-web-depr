const UPDATE_TEXT_BLOCKS = 'UPDATE_TEXT_BLOCKS';
const updateTextBlocks = (type) => (dispatch) => {
  dispatch({
    type: UPDATE_TEXT_BLOCKS,
    payload: type,
  });
};

const SHOW_TILES = 'SHOW_TILES';
const showTiles = (type) => (dispatch) => {
  dispatch({
    type: SHOW_TILES,
    payload: type,
  });
};

const UPDATE_TILES_ELEMENTS = 'UPDATE_TILES_ELEMENTS';
const updateTilesElements = (element) => (dispatch) => {
  dispatch({
    type: UPDATE_TILES_ELEMENTS,
    payload: element,
  });
};

const UPDATE_POSITION = 'UPDATE_POSITION';
const updatePosition = () => (dispatch) => {
  dispatch({
    type: UPDATE_POSITION,
  });
};

const UPDATE_NOTIFIER = 'UPDATE_NOTIFIER';
const updateNotifier = () => (dispatch) => {
  dispatch({
    type: UPDATE_NOTIFIER,
  });
};

const TOGGLE_MOBILE_NAVIGATION = 'TOGGLE_MOBILE_NAVIGATION';
const toggleMobileNavigation = (currentStatus) => (dispatch) => {
  dispatch({
    type: TOGGLE_MOBILE_NAVIGATION,
    payload: currentStatus,
  });
};

const UPDATE_CONTACTFORM_NAME = 'UPDATE_CONTACTFORM_NAME';
const updateContactFormName = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CONTACTFORM_NAME,
    payload: value,
  });
};

const UPDATE_CONTACTFORM_EMAIL = 'UPDATE_CONTACTFORM_EMAIL';
const updateContactFormEmail = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CONTACTFORM_EMAIL,
    payload: value,
  });
};

const UPDATE_CONTACTFORM_PHONE = 'UPDATE_CONTACTFORM_PHONE';
const updateContactFormPhone = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CONTACTFORM_PHONE,
    payload: value,
  });
};

const UPDATE_CONTACTFORM_MESSAGE = 'UPDATE_CONTACTFORM_MESSAGE';
const updateContactFormMessage = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CONTACTFORM_MESSAGE,
    payload: value,
  });
};

const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
const submitContactForm = () => (dispatch) => {
  dispatch({
    type: SUBMIT_CONTACT_FORM,
  });
};

const UPDATE_CURRENT_POSITION = 'UPDATE_CURRENT_POSITION';
const updateCurrentPosition = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CURRENT_POSITION,
    payload: value,
  });
};

const SHOW_ERROR_FORM_VALIDATION = 'SHOW_ERROR_FORM_VALIDATION';
const showErrorFormValidation = (value) => (dispatch) => {
  dispatch({
    type: SHOW_ERROR_FORM_VALIDATION,
    payload: value,
  });
};

const TOGGLE_SHOWREEL = 'TOGGLE_SHOWREEL';
const toggleShowreel = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SHOWREEL,
  });
};

export {
  updateTextBlocks,
  showTiles,
  updateTilesElements,
  updatePosition,
  updateNotifier,
  toggleMobileNavigation,
  updateContactFormName,
  updateContactFormEmail,
  updateContactFormPhone,
  updateContactFormMessage,
  submitContactForm,
  updateCurrentPosition,
  showErrorFormValidation,
  toggleShowreel,
};
