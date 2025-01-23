import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>
      <Child onSendData={handleChildData} />
    </div>
  );
};

export default Parent;