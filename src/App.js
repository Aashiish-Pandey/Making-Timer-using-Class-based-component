import React from 'react';
import './style.css';
import Timer from './Timer';

export default function App() {
  return (
    <div>
      <Timer startCount="1000" />
    </div>
  );
}
