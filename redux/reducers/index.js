import { combineReducers } from 'redux';
import notifier from '@/redux/reducers/notifier';
import position from '@/redux/reducers/position';
import textBlocks from '@/redux/reducers/text-blocks';
import tiles from '@/redux/reducers/tiles';
import navigation from '@/redux/reducers/navigation';

const rootReducer = combineReducers({
  notifier,
  position,
  textBlocks,
  tiles,
  navigation
});

export default rootReducer;