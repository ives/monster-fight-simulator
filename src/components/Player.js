import React from "react";
import HealthBar from "./HealthBar";
import Dice from "./Dice";

function Player(props) {

  const { position, gamePhase, playerData, name } = props;
  return (
    <div className={`player player-${position}`}>
      {position === 'right' && (<img src="../images/joker.png" />)}
      {position === 'left' && (<img src="../images/batman.png" />)}
      <HealthBar latestDamage = {playerData.latestDamage} healthLeft = {playerData.health} />
      <div className="dice">
        <Dice showValue={playerData.dice1} gamePhase={gamePhase} />
        <Dice showValue={playerData.dice2} gamePhase={gamePhase} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Player;