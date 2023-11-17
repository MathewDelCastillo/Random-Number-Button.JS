import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
  }

  handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;

    this.setState((prevState) => ({
      randomNumber: newRandomNumber,
    }));
  };

  render() {
    return (
      <div>
        <h1>Random Number: {this.state.randomNumber}</h1>
        <button onClick={this.handleClick}>Generate Random Button</button>
      </div>
    );
  }
}

export default Game;