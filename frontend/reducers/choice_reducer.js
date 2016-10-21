import { ChoiceConstants } from '../actions/choice_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ChoiceReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case ChoiceConstants.CREATE_CHOICE:
      let create = action.choice;
      newState = newState.merge({ create });
      return newState;
    case ChoiceConstants.UPDATE_CHOICE:
      let update = action.choice;
      newState[update.key] = update.count;
      return newState;
    case ChoiceConstants.DESTROY_CHOICE:
      let destroy = action.choice;
      newState.delete(destroy.key);
      return newState;
    case ChoiceConstants.CLEAR_CHOICES:
      return defaultState;
    default:
      return state;
  }
};

export default ChoiceReducer;
