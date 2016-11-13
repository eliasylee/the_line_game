import { connect } from 'react-redux';
import Flow from './flow';
import { createFlow,
         toggleBridge,
         startFlow,
         continueFlow } from '../../actions/flow_actions';

const mapStateToProps = (state, ownProps) => ({
  grid: state.flow.grid,
  lastMove: state.flow.lastMove,
  done: state.flow.done
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createFlow: grid => dispatch(createFlow(grid)),
  toggleBridge: coords => dispatch(toggleBridge(coords)),
  startFlow: coords => dispatch(startFlow(coords)),
  continueFlow: () => dispatch(continueFlow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flow);
