import React from 'react';
import Player from './Player';
import Controls from './Controls';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/monsterActions';

class MonsterSimulator extends React.Component {

  defaultState = {
    message: '',
    leftPlayer: {
      health: 100,
      dice1: null,
      dice2: null,
      latestDamage: 0
    },
    rightPlayer: {
      health: 100,
      dice1: null,
      dice2: null,
      latestDamage: 0
    }
  };

  state = this.defaultState;

  changeGamePhase = (value) => {
    this.props.actions.changeGamePhase(value);
  }

  attack = () => {
    this.changeGamePhase('thinking');

    setTimeout(() => {
      this.calcDamage();
    }, 200);
  }

  throwDice = () => {
    // ToDo move to Utilities
    return Math.floor(Math.random() * 6) + 1;
  }

  calcDamage() {

    let damageLeft = 0;
    let damageRight = 0;
    let newHealthLeft = this.state.leftPlayer.health;
    let newHealthRight = this.state.rightPlayer.health;

    let diceLeft1 = this.throwDice();
    let diceLeft2 = this.throwDice();
    let scoreLeft = diceLeft1 + diceLeft2;

    let diceRight1 = this.throwDice();
    let diceRight2 = this.throwDice();
    let scoreRight = diceRight1 + diceRight2;

    if (scoreLeft === scoreRight) {

      // Draw is boring - throw again
      return this.calcDamage();
    }

    if (scoreLeft < scoreRight) {
      damageLeft = scoreRight - scoreLeft;
      newHealthLeft = this.state.leftPlayer.health - damageLeft;
      if (newHealthLeft <= 0) {
        this.setState({ message: `Game Over! Batman lost`});
        this.changeGamePhase('lost');
      } else {
        this.setState({ message: `You suffer for ${damageLeft}!` });
      }

    } else if (scoreRight < scoreLeft) {
      damageRight = scoreLeft - scoreRight;
      newHealthRight = this.state.rightPlayer.health - damageRight;

      if (newHealthRight <= 0) {
        this.setState({ message: `Batman Won!`});
        this.changeGamePhase('won');
      } else {
        this.setState({ message: `You hit for ${damageRight}!` });
      }
    }

    let newLeftState = {
      health: newHealthLeft,
      dice1: diceLeft1,
      dice2: diceLeft2,
      latestDamage: damageLeft
    };

    let newRightState = {
      health: newHealthRight,
      dice1: diceRight1,
      dice2: diceRight2,
      latestDamage: damageRight
    };

    this.setState({
      leftPlayer: newLeftState,
      rightPlayer: newRightState
    }, () => {
      if (newHealthLeft <= 0 || newHealthRight <= 0) {
        return;
      }
      this.changeGamePhase('on');
    });

    // ToDo Implement a RESET button - for now refresh the browser
  }


  render() {

    return (
      <div className="flex-container">
        <header className="header">
          <h1>Battle Simulator</h1>
        </header>
        <section className="main">

          <Player
            position='left'
            gamePhase={this.props.monsterFighter.gamePhase}
            playerData={this.state.leftPlayer}
            name='Batman'
          />

          <Controls
            attack={this.attack}
            gamePhase={this.props.monsterFighter.gamePhase}
            message={this.state.message}
          />

          <Player
            position='right'
            gamePhase={this.props.monsterFighter.gamePhase}
            playerData={this.state.rightPlayer}
            name='Joker'
          />

        </section>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    monsterFighter: state.monsterFighter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterSimulator);
