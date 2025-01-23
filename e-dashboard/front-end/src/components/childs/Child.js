import React, { useState } from 'react';

const Child = ({ onSendData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendDataToParent = () => {
    onSendData(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter data to send to Parent" 
      />
      <button onClick={sendDataToParent}>Send to Parent</button>
    </div>
  );
};

export default Child;