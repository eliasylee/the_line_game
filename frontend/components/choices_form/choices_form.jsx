import React from 'react';

class ChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: ""
    };
    this.handleCreateChoice = this.handleCreateChoice.bind(this);
  }

  handleCreateChoice() {
    let choice = this.state;
    if (choice.name !== "" && choice.count !== "") {
      this.props.createChoice(choice);
      this.setState({ name: "", count: "" });
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className="createChoiceBox">
        <form onSubmit={this.handleCreateChoice} className="createChoiceForm">
          <div className="choiceNameBox">
            <div className="choiceNameLine">
              Name
              <input type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className="choiceInput" />
            </div>
          </div>
          <div className='choiceCountBox'>
            <div className="choiceCountLine">
              Count
              <input type="text"
                value={this.state.count}
                onChange={this.update("count")}
                className="choiceInput" />
            </div>
          </div>
          <div className="createChoiceBox">
            <input className="createChoiceButton" type="submit" value={this.props.action} />
          </div>
        </form>
      </div>
    );
  }
}

export default ChoicesForm;
