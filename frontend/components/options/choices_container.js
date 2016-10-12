import { connect } from 'react-redux';
import Choices from './choices';
import { updateChoice,
         deleteChoice,
         clearChoices } from '../../actions/choice_actions';

const mapStateToProps = (state, ownProps) => ({
  choices: state.choices
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateChoice: choice => dispatch(updateChoice(choice)),
  deleteChoice: choice => dispatch(deleteChoice(choice)),
  clearChoices: () => dispatch(clearChoices())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choices);
