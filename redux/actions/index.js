const UPDATE_TEXT_BLOCKS = 'UPDATE_TEXT_BLOCKS';
const updateTextBlocks = (type) => (dispatch) => {
  dispatch({
    type: UPDATE_TEXT_BLOCKS,
    payload: type
  });
};

const SHOW_TILES = 'SHOW_TILES';
const showTiles = (type) => (dispatch) => {
  dispatch({
    type: SHOW_TILES,
    payload: type
  });
};

const UPDATE_TILES_ELEMENTS = 'UPDATE_TILES_ELEMENTS';
const updateTilesElements = (element) => (dispatch) => {
  dispatch({
    type: UPDATE_TILES_ELEMENTS,
    payload: element
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
const toggleMobileNavigation = (currentStatus) => (dispatch) =>  {
  dispatch({
    type: TOGGLE_MOBILE_NAVIGATION,
    payload: currentStatus
  });
}

export {
  updateTextBlocks,
  showTiles,
  updateTilesElements,
  updatePosition,
  updateNotifier,
  toggleMobileNavigation
};
