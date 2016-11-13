import { combineReducers } from 'redux';
import ChoiceReducer from './choice_reducer';

const RootReducer = combineReducers({
  choices: ChoiceReducer
});

export default RootReducer;
