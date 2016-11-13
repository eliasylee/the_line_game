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
                                key={key} />;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="choicesPage">
        <div className="choicesHeader">The Line Game</div>
        {this.renderChoices()}
        <ChoicesFormContainer action="Create"/>
      </div>
    );
  }
}

export default Choices;
