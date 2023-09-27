import React from 'react';

const AnimatedBackground = () => {
  return (
    <div>
      <div className="context">
        <h1>Pure CSS Animated Background</h1>
      </div>

      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }, (_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedBackground;