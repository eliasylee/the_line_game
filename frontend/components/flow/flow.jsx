import React from 'react';
import FlowPath from './flow_path';
import FlowBridge from './flow_bridge';

const DEFAULT_PATH = [
  null,
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
  null
];

const DEFAULT_BRIDGE = [
  null,
  [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false],
  [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false],
  [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false],
  [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false],
  [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false], [false, false],
  null
];

export default class Flow extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: []
    };
    this.prepareGrid = this.prepareGrid.bind(this);
  }

  componentDidMount() {
    const newGrid = this.prepareGrid();
    this.props.createFlow(newGrid);
  }

  componentWillReceiveProps(newProps) {
    const newGrid = newProps.grid;
    this.setState({ grid: newGrid });
  }

  shuffle(array) {
    for (let i = array.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }

    return array;
  }

  preparePath(choice, index) {
    let newPath = DEFAULT_PATH.slice();
    newPath[0] = index + 1;
    newPath[newPath.length - 1] = choice;
    return newPath;
  }

  prepareGrid() {
    const choices = JSON.parse(localStorage.getItem("state"));
    const keys = Object.keys(choices);

    let allChoices = [];
    keys.forEach(key => {
      for (let i = 0; i < parseInt(choices[key]); i++) {
        allChoices.push(key);
      }
    });
    allChoices = this.shuffle(allChoices);

    let allButOne = allChoices.slice(0, allChoices.length - 1);
    let lastOne = allChoices.slice(allChoices.length - 1);

    let grid = [];
    allButOne.forEach((choice, index) => {
      const preparedPath = this.preparePath(choice, index);
      const preparedBridge = DEFAULT_BRIDGE.slice();
      grid.push(preparedPath);
      grid.push(preparedBridge);
    });
    grid.push(this.preparePath(lastOne[0], allButOne.length));

    return grid;
  }

  renderRows() {
    const grid = this.state.grid;
    return (
      <div className="flowChart">
        {grid.map((row, index) => {
          if (row[0] === null) {
            return (
              <FlowBridge row={row}
                          rowIndex={index}
                          key={index}
                          toggleBridge={this.props.toggleBridge} />
            );
          } else {
            return (
              <FlowPath row={row}
                        index={index}
                        key={index}
                        startFlow={this.props.startFlow}
                        continueFlow={this.props.continueFlow}
                        done={this.props.done} />
            );
          }
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="flowChartPage">
        {this.renderRows()}
      </div>
    );
  }
}
