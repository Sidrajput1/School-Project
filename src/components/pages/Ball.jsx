import React, { useState, useEffect } from 'react';
 // Import CSS for styling

const Ball = () => {
  const [balls, setBalls] = useState([]);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to create a ball object
  const createBall = () => {
    return {
      id: Date.now() + Math.random(), // Unique ID for each ball
      x: Math.random() * window.innerWidth, // Random x coordinate within window width
      y: Math.random() * window.innerHeight, // Random y coordinate within window height
      speedX: Math.random() * 0.5 - 0.25, // Random horizontal speed
      speedY: Math.random() * 0.5 - 0.25, // Random vertical speed
      color: getRandomColor() // Random color
    };
  };

  // Function to get next color (slightly lighter)
  const getNextColor = (color) => {
    const hex = color.substring(1); // Remove '#'
    const num = parseInt(hex, 16);
    const amount = 20; // Increase brightness by this amount
    const r = (num >> 16) + amount;
    const b = ((num >> 8) & 0x00FF) + amount;
    const g = (num & 0x0000FF) + amount;
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  };

  // Function to update ball positions and colors
  const updateBalls = () => {
    setBalls(prevBalls => {
      return prevBalls.map(ball => {
        // Update position
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // If ball reaches window edge, reverse direction
        if (ball.x <= 0 || ball.x >= window.innerWidth) {
          ball.speedX *= -1;
        }
        if (ball.y <= 0 || ball.y >= window.innerHeight) {
          ball.speedY *= -1;
        }

        // Update color gradually
        ball.color = getNextColor(ball.color);

        return ball;
      });
    });
  };

  // Function to start animation loop
  const startAnimation = () => {
    setInterval(updateBalls, 1000 / 20); // Update balls approximately 60 times per second
  };

  useEffect(() => {
    // Generate initial balls
    const initialBalls = [];
    for (let i = 0; i < 20; i++) { // Generate 10 balls initially
      initialBalls.push(createBall());
    }
    setBalls(initialBalls);

    // Start animation loop
    startAnimation();

    // Cleanup interval on component unmount
    return () => clearInterval(startAnimation);
  }, []);

  return (
    <div className="container overflow-hidden ">
      {balls.map(ball => (
        <div
          key={ball.id}
          className="ball"
          style={{
            left: ball.x + 'px',
            top: ball.y + 'px',
            backgroundColor: ball.color
          }}
        ></div>
      ))}
    </div>
  );
};

export default Ball;
