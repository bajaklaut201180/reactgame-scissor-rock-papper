import React from 'react';
import Player from './Player';
import "./styles.css";
import { connect } from 'react-redux';
import { playerOnePoint, playerTwoPoint, resetGame } from '../data/redux/actions';

const weapons = ["rock", "paper", "scissors"];
class App extends React.Component {

  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: "",
    pause: false
  }

  componentDidUpdate() {
    if(this.props.point.playerOne === 5) {
      if (!this.state.pause) {
        this.setState({
            pause: true
        });
      }
      console.log('player 1 menang')
    }

    if(this.props.point.playerTwo === 5) {
      if (!this.state.pause) {
        this.setState({
            pause: true
        });
      }
      console.log('player 2 menang')
    }
  }

  resetGame = () => {
    this.setState({
      pause: false
    })
    this.props.resetGame();
  }

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.selectWinner();
      }
    }, 100);
  }

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;
    
    if (playerOne === playerTwo) {
      this.setState({
        winner: "Oops it's a Draw!"
      });
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      this.updateScore('player1')
      this.setState({
        winner: "Player One Wins"
      });
    } else {
      this.updateScore('player2')
      this.setState({
        winner: "Player Two Wins"
      });
    }
  };

  updateScore = (selectPlayer) => {
    selectPlayer === 'player1' ? this.props.playerOnePoint() : this.props.playerTwoPoint();
  }
  
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };

  renderButtonSubmit = () => {
    if(this.state.pause) {
      return <button type="button" className="reset" onClick={this.resetGame}>Reset Game!</button>
    }else {
      return <button type="button" className="start" onClick={this.startGame}>Start!</button>
    }
  }

  render() {  
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <React.Fragment>
        <div className="title">
          <h1 style={{ textAlign: "center" }}>The Rock Paper Scissors</h1>
        </div>

        <div>
          <div className="player">
            <h2>Player 1</h2>
            <h4>{this.props.point.playerOne}</h4>
          </div>
          <div className="player">
            <h2>Player 2</h2>
            <h4>{this.props.point.playerTwo}</h4>
          </div>
        </div>
        <div>
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissors")}
          >
            scissor
          </button>
        </div>
        <div className="winner">{ winner }</div>
        {this.renderButtonSubmit()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps, { playerOnePoint, playerTwoPoint, resetGame })(App);