import React from "react";

function Controls({ gamePhase, message, attack }) {

  return (
    <div className="controls">
    <p className={`message ${gamePhase === 'won' ? 'message-green' : gamePhase === 'lost' ? 'message-red' : ''}`}>&nbsp;{message}&nbsp;</p>
      
      {gamePhase === 'on' && (
        <button onClick={attack}>Attack!</button>
      )}
    </div>
  );
};

export default Controls;