import React from "react";

function Dice({ showValue, gamePhase }) {

  return (
    <div style={{animation:  gamePhase === 'thinking' ? `spin 0.2s linear infinite` : ``}} className="dice-val">
      &nbsp;{ showValue }&nbsp;
    </div>
  );
};

export default Dice;