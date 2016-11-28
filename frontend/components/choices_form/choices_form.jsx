import React from 'react';

class ChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      count: this.props.count
    };
    this.handleCreateChoice = this.handleCreateChoice.bind(this);
  }

  handleCreateChoice() {
    let choice = this.state;
    if (choice.name !== "" && choice.count !== "") {
      this.props.createChoice(choice);
      this.setState({ name: "", count: "" });
      if (this.props.action === "Done") {
        this.props.toggleView();
      }
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  editOrViewName() {
    if (this.props.action === "Done") {
      return <div className="choiceName">{this.state.name}</div>;
    } else {
      return <div className="choiceNameLine">
             <input type="text"
                    value={this.state.name}
                    placeholder="Choice"
                    onChange={this.update("name")}
                    className="choiceInput" />
             </div>;
    }
  }

  render() {
    return (
      <div className="createChoiceBox">
        <form onSubmit={this.handleCreateChoice} className="createChoiceForm">
          <div className="choiceNameBox">
            {this.editOrViewName()}
          </div>
          <div className='choiceCountBox'>
            <div className="choiceCountLine">
              <input type="text"
                     value={this.state.count}
                     placeholder="Count"
                     onChange={this.update("count")}
                     className="choiceInput" />
            </div>
          </div>
          <div className="createChoiceButtonBox">
            <input className="createChoiceButton" type="submit" value={this.props.action} />
          </div>
        </form>
      </div>
    );
  }
}

export default ChoicesForm;
