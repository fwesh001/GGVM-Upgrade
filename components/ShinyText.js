import React from 'react';

export default function ShinyText({ text = 'Just some shiny text!', disabled = false, speed = 2.2, className = '' }) {
  const duration = `${Math.max(0.1, Number(speed) || 2.2)}s`;
  const style = { ['--shine-duration']: duration, opacity: disabled ? 0.75 : 1 };

  return (
    React.createElement(
      'h1',
      { className: `${className ? className + ' ' : ''}shiny-text`, style },
      text
    )
  );
}
