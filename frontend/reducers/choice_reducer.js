import { ChoiceConstants } from '../actions/choice_actions';
import merge from 'lodash/merge';

const saveState = (newState) => {
  localStorage.setItem("state", JSON.stringify(newState));
};

const defaultState = {};

const ChoiceReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case ChoiceConstants.CREATE_CHOICE:
      let choice = action.choice;
      newState[choice.name] = choice.count;
      saveState(newState);
      return newState;
    case ChoiceConstants.UPDATE_CHOICE:
      let update = action.choice;
      newState[update.key] = update.count;
      saveState(newState);
      return newState;
    case ChoiceConstants.DESTROY_CHOICE:
      let destroy = action.choice;
      delete newState[destroy];
      saveState(newState);
      return newState;
    case ChoiceConstants.CLEAR_CHOICES:
      saveState(defaultState);
      return defaultState;
    case ChoiceConstants.SET_CHOICES:
      return action.choices;
    default:
      return state;
  }
};

export default ChoiceReducer;
