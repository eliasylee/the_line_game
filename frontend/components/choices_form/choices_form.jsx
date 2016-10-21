import React from 'react';

class ChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: {}
    };
  }

  handleCreateChoice() {
    this.props.createChoice(this.state.choice);
  }

  render() {

  }
}

export default ChoicesForm;
