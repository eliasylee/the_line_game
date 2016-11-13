import React from 'react';
import FlowBridgeItem from './flow_bridge_item';

export default class FlowBridge extends React.Component {
  render() {
    const row = this.props.row;
    return (
      <div className="row">
        {row.map((bridge, index) => {
          if (bridge) {
            return <FlowBridgeItem key={index}
                                   rowIndex={this.props.rowIndex}
                                   colIndex={index}
                                   bridge={bridge}
                                   toggleBridge={this.props.toggleBridge} />;
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
