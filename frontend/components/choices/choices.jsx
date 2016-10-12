import React from 'react';
import ChoicesItem from './choices_item';

class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: {}
    };
  }

  renderChoices() {
    const { choices } = this.props.choices;
    let keys = Object.keys(choices);

    return (
      <div className="choicesBox">
        {keys.map( key => {
          return <ChoicesItem choice={choices[key]}
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
      </div>
    );
  }
}

export default Choices;
