import { combineReducers } from 'redux';
import notifier from '@/redux/reducers/notifier';
import position from '@/redux/reducers/position';
import textBlocks from '@/redux/reducers/text-blocks';
import tiles from '@/redux/reducers/tiles';
import navigation from '@/redux/reducers/navigation';
import contactForm from '@/redux/reducers/contact-form';
import currentPosition from '@/redux/reducers/current-position';
import showreel from '@/redux/reducers/showReel';

const rootReducer = combineReducers({
  notifier,
  position,
  textBlocks,
  tiles,
  navigation,
  contactForm,
  currentPosition,
  showreel,
});

export default rootReducer;
