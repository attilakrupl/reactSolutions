import React, { Component } from 'react';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2,
        },
        {
          text: 'Buy milk',
          prio: 1,
        },
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2,
        },
        {
          text: 'Mentoring others',
          prio: 1,
        },
      ],
    };
  }

  render = () => {
    return (
      <>
        <div>
          <h1>TODOS:</h1>
          <ul>
            {this.state.todo
              .sort((a, b) => a.prio - b.prio)
              .map((element, index) => {
                return <li key={element.text + index}>{element.text}</li>;
              })}
          </ul>
        </div>
        <div>
          <h1>DONE TODOS:</h1>
          <ul>
            {this.state.doneTodo
              .sort((a, b) => a.prio - b.prio)
              .map((element, index) => {
                return <li key={element.text + index}>{element.text}</li>;
              })}
          </ul>
        </div>
      </>
    );
  };
}
