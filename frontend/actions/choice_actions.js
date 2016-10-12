export const ChoiceConstants = {
  CREATE_CHOICE: 'CREATE_CHOICE',
  UPDATE_CHOICE: 'UPDATE_CHOICE',
  DELETE_CHOICE: 'DELETE_CHOICE',
  CLEAR_CHOICES: 'CLEAR_CHOICES'
};

export const createChoice = choice => ({
  type: ChoiceConstants.CREATE_CHOICE,
  choice
});

export const updateChoice = choice => ({
  type: ChoiceConstants.UPDATE_CHOICE,
  choice
});

export const deleteChoice = choice => ({
  type: ChoiceConstants.DELETE_CHOICE,
  choice
});

export const clearChoices = () => ({
  type: ChoiceConstants.CLEAR_CHOICES
});
