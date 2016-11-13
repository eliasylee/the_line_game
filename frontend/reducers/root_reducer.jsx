import { combineReducers } from 'redux';
import ChoiceReducer from './choice_reducer';
import FlowReducer from './flow_reducer';

const RootReducer = combineReducers({
  choices: ChoiceReducer,
  flow: FlowReducer,
});

export default RootReducer;
