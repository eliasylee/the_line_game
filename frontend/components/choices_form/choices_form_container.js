import { connect } from 'react-redux';
import ChoicesForm from './choices_form';
import { createChoice } from '../../actions/choice_actions';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  count: ownProps.count,
  action: ownProps.action
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChoice: choice => dispatch(createChoice(choice))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesForm);
