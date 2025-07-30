import React, { useState } from 'react';
import LandingPage from './landingpage';

import {
  Video1Example,
  Video2Example,
  Video3Example,
  Video4Example,
  Video5Example,
  Video6Example,
  Video7Example,
  Video8Example,
  Video10Example
} from './Footer'; 

import {
  Video11Example,
  Video12Example,
  Video13Example,
  Video14Example,
  Video15Example,
  Video16Example,
  Video17Example,
  Video18Example,
  Video19Example,
  Video20Example
} from './Nav';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      {showLanding ? (
        <LandingPage startDemo={() => setShowLanding(false)} />
      ) : (
        <>
          <Video1Example />
          <Video2Example name="afnan" />
          <Video3Example />
          <Video4Example />
          <Video5Example />
          <Video6Example />
          <Video7Example />
          <Video8Example />
          <Video10Example />
          <Video11Example isLoggedIn={true} />
          <Video12Example isAdmin={false} />
          <Video13Example />
          <Video14Example />
          <Video15Example />
          <Video16Example />
          <Video17Example />
          <Video18Example />
          <Video19Example />
          <Video20Example />
        </>
      )}
    </div>
  );
}

export default App;
