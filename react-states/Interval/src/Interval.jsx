import React, { Component } from 'react';

export default class Interval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timesClicked: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('We did mount');
    this.setOwnInterval();
  }

  setOwnInterval() {
    console.log('set called');
    this.timer = setInterval(() => {
      this.setState(() => ({
        time: this.state.time + 1,
      }));
    }, 1000 / Math.pow(2, this.state.timesClicked));
  }

  handleClick() {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1,
    }));
    clearInterval(this.timer);
    this.setOwnInterval();
  }

  render = () => (
    <>
      <div style={{ display: 'inline' }}>
        <button onClick={this.handleClick} id="clickMeButton">
          Click Me
        </button>
        <span className="counter">{this.state.time}</span>
      </div>
    </>
  );
}
