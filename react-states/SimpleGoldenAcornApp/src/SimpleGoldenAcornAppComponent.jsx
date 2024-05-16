import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

export default class SimpleGoldenAcornAppComponent extends Component {
  //   SimpleGoldenAcornApp should store a number in
  //      the states and contain the business logic
  //   it should have an handleIncrement and
  //      handleDecrease function which update the state
  state = {
    count: 0,
  };

  handleBuy = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleEat = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleKeyPress = (event) => {
    console.log(event);
    if (event.keyCode === 38) {
      this.handleBuy();
    } else if (event.keyCode === 40) {
      this.handleEat();
    }
  };

  render = () => (
    <div tabIndex={0} onKeyDown={this.handleKeyPress}>
      <Button method={this.handleBuy} butonText={'Buy One'} />
      <Display count={this.state.count} />
      <Button method={this.handleEat} butonText={'Eat One'} />
    </div>
  );
}
