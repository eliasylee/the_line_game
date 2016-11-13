import { connect } from 'react-redux';
import Flow from './flow';

const mapStateToProps = (state, ownProps) => ({
  choices: state.choices
});

export default connect(
  mapStateToProps,
  null
)(Flow);
