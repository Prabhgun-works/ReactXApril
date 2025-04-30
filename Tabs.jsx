// Tabs.jsx
import React from 'react';

export default function Tabs({ showModal, setShowModal }) {
  const [active, setActive] = React.useState('');

  const handleClick = (label) => {
    setActive(label);
    console.log("Active Tab:", label);
  };

  const closeModal = () => {
    setShowModal(false);
    console.log('Modal closed');
  };

  if (!showModal) return null;

  return (
    <div style={{ padding: 20, border: '1px solid #aaa', marginTop: 20 }}>
      <h3>Tabs Modal</h3>
      <div>
        <button onClick={() => handleClick("All")}>All</button>
        <button onClick={() => handleClick("Completed")}>Completed</button>
        <button onClick={() => handleClick("Incomplete")}>Incomplete</button>
      </div>
      <br />
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
}