import React from 'react';
import ChoicesItem from './choices_item';
import ChoicesFormContainer from '../choices_form/choices_form_container';
import { withRouter } from 'react-router';

class Choices extends React.Component {
  constructor() {
    super();
    this.handleClearChoices = this.handleClearChoices.bind(this);
    this.handleBeginFlow = this.handleBeginFlow.bind(this);
  }

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem("state"));
    this.props.setChoices(savedState);
  }

  handleClearChoices() {
    this.props.clearChoices();
  }

  handleBeginFlow() {
    const state = window.store.getState();
    this.props.router.push("/flow");
  }

  renderChoices() {
    if (this.props && this.props.choices) {
      const { choices } = this.props;
      let keys = Object.keys(choices);

      return (
        <div className="choicesBox">
          {keys.map( key => {
            return <ChoicesItem name={key}
                                count={choices[key]}
                                key={key}
                                destroyChoice={this.props.destroyChoice} />;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="choicesPage">
        <div className="choicesHeader">The Line Game</div>
        <div className="choicesActionBar">
          <div className="clearButton"
               onClick={this.handleClearChoices}>
               Clear
          </div>
          <div className="beginButton"
               onClick={this.handleBeginFlow}>
               Begin
          </div>
        </div>
        <ChoicesFormContainer action="Create"/>
        <div className="choicesList">
          <div className="choicesListHeader">
            <div>Choices</div>
            <div>Count</div>
          </div>
          {this.renderChoices()}
        </div>
      </div>
    );
  }
}

export default withRouter(Choices);
