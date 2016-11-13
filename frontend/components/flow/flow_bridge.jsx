import React from 'react';

export default class FlowBridge extends React.Component {
  constructor() {
    super();
    this.handleToggleBridge = this.handleToggleBridge.bind(this);
    this.prepBridgeClass = this.prepBridgeClass.bind(this);
  }

  handleToggleBridge() {
    this.props.toggleBridge();
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
    const row = this.props.row;
    return (
      <div className="row">
        {row.map((bridge, index) => {
          if (bridge) {
            return (
              <div className={this.prepBridgeClass(bridge)}
                   onClick={this.handleToggleBridge}
                   key={index}>
              </div>
            );
          } else {
            return (
              <div className="blankBridge"
                   key={index}>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
