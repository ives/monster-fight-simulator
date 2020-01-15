import React from "react";

function HealthBar({ latestDamage, healthLeft }) {

  return (
    <div className="health-bar">
      <p>&nbsp;{latestDamage ? `-${latestDamage}` : ``}</p>
      <div className={`bar-container ${healthLeft > 0 ? 'alive' : 'finished'}`}>
        {healthLeft > 0 && (
          <div className="paint" style={{height: healthLeft}}></div>
        )}
      </div>
      <p>{healthLeft}</p>
    </div>
  );
};

export default HealthBar;