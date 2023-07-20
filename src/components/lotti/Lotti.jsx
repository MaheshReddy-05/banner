import React from 'react';
import '@dotlottie/player-component';
import manm from '../../assets/images/Hero/hero.lottie';

function Lotti() {
  return (
    <div className="App">
      <dotlottie-player
        src={manm}
        autoplay
        loop
        speed={0.5}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}

export default Lotti;