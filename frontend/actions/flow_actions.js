export const FlowConstants = {
  CREATE_FLOW: 'CREATE_FLOW',
  TOGGLE_BRIDGE: 'TOGGLE_BRIDGE',
  START_FLOW: 'START_FLOW',
  CONTINUE_FLOW: 'CONTINUE_FLOW'
};

export const createFlow = flow => ({
  type: FlowConstants.CREATE_FLOW,
  flow
});

export const toggleBridge = coords => ({
  type: FlowConstants.TOGGLE_BRIDGE,
  coords
});

export const startFlow = coords => ({
  type: FlowConstants.START_FLOW,
  coords
});

export const continueFlow = () => ({
  type: FlowConstants.CONTINUE_FLOW
});
