import React from 'react';

export default class FlowBridgeItem extends React.Component {
  constructor() {
    super();
    this.handleToggleBridge = this.handleToggleBridge.bind(this);
    this.prepBridgeClass = this.prepBridgeClass.bind(this);
  }

  handleToggleBridge() {
    const { rowIndex, colIndex } = this.props;
    this.props.toggleBridge([rowIndex, colIndex]);
  }

  prepBridgeClass(bridge) {
    if (bridge[0]) {
      return "traversedBridge";
    } else {
      if (bridge[1]) {
        return "clickedBridge";
      } else {
        return "unclickedBridge";
      }
    }
  }

  render() {
    return (
      <div className={this.prepBridgeClass(this.props.bridge)}
           onClick={this.handleToggleBridge} >
      </div>
    );
  }
}
