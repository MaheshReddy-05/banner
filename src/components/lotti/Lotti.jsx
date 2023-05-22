import React from 'react';
import Lottie from 'lottie-react';
import '@dotlottie/player-component';
import manm from '../../assets/images/JCF/hero.lottie';
import lld from '../../assets/images/JCF/LLD.json';

const style = {
  height: 250,
};

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




export function LLD() {
  return (
    <div className=''>
      <Lottie animationData={lld}  style={style} />
    </div>
  );
  }  
