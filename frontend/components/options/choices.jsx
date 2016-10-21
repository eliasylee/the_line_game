import React from 'react';
import ChoicesItem from './choices_item';
import ChoicesFormContainer from '../choices_form/choices_form_container';

class Choices extends React.Component {
  renderChoices() {
    const { choices } = this.props.choices;
    let keys = Object.keys(choices);

    return (
      <div className="choicesBox">
        {keys.map( key => {
          return <ChoicesItem count={choices[key]}
                              key={key} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="choicesPage">
        <div className="choicesHeader">The Line Game</div>
        {this.renderChoices()}
        <ChoicesFormContainer />
      </div>
    );
  }
}

export default Choices;
