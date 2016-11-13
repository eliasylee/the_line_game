import React from 'react';

export default class FlowPath extends React.Component {
  constructor() {
    super();
    this.handleStart = this.handleStart.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleStart() {
    this.props.startFlow();
    setTimeout(this.handleContinue, 500);
  }

  handleContinue() {
    this.props.continueFlow();
    if (!this.props.done) {
      setTimeout(this.handleContinue, 500);
    }
  }

  prepStepClass(step) {
    if (step) {
      return "traversedStep";
    } else {
      return "untraversedStep";
    }
  }

  render() {
    let row = this.props.row;
    let start = row.slice(0, 1);
    let path = row.slice(1, row.length - 1);
    let finish = row.slice(row.length - 1);
    return (
      <div className="row">
        <div className="pathStart"
             onClick={this.handleStart}>
             {start}
        </div>
        {path.map((step, index) => {
          return (
            <div className={this.prepStepClass(step)}
                 key={index}>
            </div>
          );
        })}
        <div className="pathFinish">
             {finish}
        </div>
      </div>
    );
  }
}
