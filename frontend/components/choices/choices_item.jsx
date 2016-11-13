import React from 'react';
import ChoicesFormContainer from '../choices_form/choices_form_container';

class ChoicesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    let nextView = !this.state.view;
    this.setState({ "view": nextView });
  }

  viewOrEdit() {
    const { name, count } = this.props;
    if (this.state.view) {
      return (
        <div className="choiceItem">
          <div className="choiceName">{name}</div>
          <div className="choiceCount">{count}</div>
          <div className="choiceViewToggle"
               onClick={this.toggleView}>Edit</div>
        </div>
      );
    } else {
      return (
        <div className="choicesFormBox">
          <ChoicesFormContainer action="Done"
                                name={name}
                                count={count}
                                key={name} />
          <div className="choiceViewToggle"
               onClick={this.toggleView}>Done</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="choicesItemBox">
        {this.viewOrEdit()}
      </div>
    );
  }
}

export default ChoicesItem;
