import React from 'react';

const Child = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {message}</p>
    </div>
  );
};

export default Child;