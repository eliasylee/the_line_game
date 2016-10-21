import { connect } from 'react-redux';
import Options from './options';
import { createChoice,
         updateChoice,
         destroyChoice,
         clearChoices } from '../../actions/choice_actions';

const mapStateToProps = (state, ownProps) => ({
  choices: state.choices
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChoice: choice => dispatch(createChoice(choice)),
  updateChoice: choice => dispatch(updateChoice(choice)),
  destroyChoice: choice => dispatch(destroyChoice(choice)),
  clearChoices: () => dispatch(clearChoices())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
