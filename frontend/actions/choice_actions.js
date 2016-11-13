export const ChoiceConstants = {
  CREATE_CHOICE: 'CREATE_CHOICE',
  UPDATE_CHOICE: 'UPDATE_CHOICE',
  DESTROY_CHOICE: 'DESTROY_CHOICE',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  SET_CHOICES: 'SET_CHOICES'
};

export const createChoice = choice => ({
  type: ChoiceConstants.CREATE_CHOICE,
  choice
});

export const updateChoice = choice => ({
  type: ChoiceConstants.UPDATE_CHOICE,
  choice
});

export const destroyChoice = choice => ({
  type: ChoiceConstants.DESTROY_CHOICE,
  choice
});

export const clearChoices = () => ({
  type: ChoiceConstants.CLEAR_CHOICES
});

export const setChoices = choices => ({
  type: ChoiceConstants.SET_CHOICES,
  choices
});
