import React, { useState } from 'react';

function LandingPage({ startDemo }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>This is React Project</h1>
      <p>Welcome to my course react.</p>
      <button onClick={startDemo}>Start Demo</button>
    </div>
  );
}

export default LandingPage;
