import React from 'react';
import ChoicesItem from './choices_item';
import ChoicesFormContainer from '../choices_form/choices_form_container';

class Choices extends React.Component {
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

export default Choices;
