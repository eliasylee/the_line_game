import React from 'react';
import ChoicesFormContainer from '../choices_form/choices_form_container';

class ChoicesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true
    };
  }

  toggleView() {
    let nextView = !this.state.view;
    this.setState({ "view": nextView });
  }

  viewOrEdit() {
    const { key, count } = this.props;
    if (this.state.view) {
      return (
        <div className="choiceItem">
          <div className="choiceName">{key}</div>
          <div className="choiceCount">{count}</div>
          <div className="choiceViewToggle"
               onClick={this.toggleView}>Edit</div>
        </div>
      );
    } else {
      return (
        <div classname="choicesFormBox">
          <ChoicesFormContainer key={key}
                                count={count} />
          <div className="choiceViewToggle"
               onClick={this.toggleView}>Edit</div>
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
