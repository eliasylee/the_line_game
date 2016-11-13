import React from 'react';

export default class Flow extends React.Component {
  shuffle(array) {
    for (let i = array.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }

    return array;
  }

  prepareChoices() {
    const { choices } = this.props;
    const keys = Object.keys(choices);

    let allChoices = [];
    keys.forEach(key => {
      for (let i = 0; i < choices[key]; i++) {
        allChoices.push(key);
      }
    });
    allChoices = this.shuffle(allChoices);

    return allChoices;
  }

  renderDivs() {
    const choices = this.prepareChoices();
    
  }

  render() {
    return (
      <div className="flowChartPage">
        {this.renderDivs()}
      </div>
    );
  }
}
