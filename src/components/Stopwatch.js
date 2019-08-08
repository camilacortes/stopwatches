import React, { Component } from 'react';

export default class Stopwatch extends Component {
  state = {
    hours: 0,
    mins: 0,
    secs: 0,
    running: false
  };

  start = () => {
    if (this.state.running) {
      return;
    }
    this.setState({ running: true });
    const interval = setInterval(() => {
      if (!this.state.running) {
        return clearInterval(interval);
      }
      if (this.state.secs === 59) {
        this.setState({
          secs: 0
        });
        if (this.state.mins === 59) {
          this.setState({
            mins: 0,
            hours: this.state.hours + 1
          });
        } else {
          this.setState({
            mins: this.state.mins + 1
          });
        }
      } else {
        this.setState({ secs: this.state.secs + 1 });
      }
    }, 1000);
  };

  pause = () => {
    this.setState({ running: false });
  };

  reset = () => {
    this.setState({
      running: false,
      hours: 0,
      mins: 0,
      secs: 0
    });
  };

  render() {
    return (
      <span className='border'>
        <div>
          <span className='digits'>
            {this.state.hours}:{this.state.mins}:{this.state.secs}
          </span>
          <button onClick={this.start} className='start-btn'>
            Start
          </button>
          <button onClick={this.pause} className='pause-btn'>
            Pause
          </button>
          <button onClick={this.reset} className='reset-btn'>
            Reset
          </button>
        </div>
      </span>
    );
  }
}
