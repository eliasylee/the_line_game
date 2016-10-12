import { connect } from 'react-redux';
import ChoicesForm from './choices_form';
import { createChoice } from '../../actions/choice_actions';

const mapStateToProps = (state, ownProps) => ({
  key: ownProps.key,
  count: ownProps.count
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChoice: choice => dispatch(createChoice(choice))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesForm);
