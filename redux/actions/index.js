const SHOW_TILES = 'SHOW_SERVICE_TILES';
const showTiles = (type) => (dispatch) => {
  dispatch({
    type: SHOW_SERVICE_TILES,
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

export {
  showTiles,
  updateTilesElements,
  updatePosition,
  updateNotifier,
};
