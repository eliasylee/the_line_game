import { connect } from 'react-redux';
import Choices from './choices';
import { createChoice,
        updateChoice,
        destroyChoice,
        clearChoices,
        setChoices } from '../../actions/choice_actions';


const mapStateToProps = (state, ownProps) => ({
  choices: state.choices
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChoice: choice => dispatch(createChoice(choice)),
  updateChoice: choice => dispatch(updateChoice(choice)),
  destroyChoice: choice => dispatch(destroyChoice(choice)),
  clearChoices: () => dispatch(clearChoices()),
  setChoices: choices => dispatch(setChoices())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choices);
