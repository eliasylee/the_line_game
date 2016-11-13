import { ChoiceConstants } from '../actions/choice_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ChoiceReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case ChoiceConstants.CREATE_CHOICE:
      let choice = action.choice;
      newState[choice.name] = choice.count;
      return newState;
    case ChoiceConstants.UPDATE_CHOICE:
      let update = action.choice;
      newState[update.key] = update.count;
      return newState;
    case ChoiceConstants.DESTROY_CHOICE:
      let destroy = action.choice;
      delete newState[destroy];
      return newState;
    case ChoiceConstants.CLEAR_CHOICES:
      return defaultState;
    case ChoiceConstants.SET_cHOICES:
      return action.choices;
    default:
      return state;
  }
};

export default ChoiceReducer;
