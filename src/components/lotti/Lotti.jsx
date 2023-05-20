import React from 'react';
import Lottie from 'lottie-react';
import manm from '../../assets/images/JCF/manandrobo.json';
import lld from '../../assets/images/JCF/LLD.json';

const style = {
  height: 300,
};

export default function Lotti() {
  return (
    <div className=''>
      <Lottie animationData={manm} loop={true} />
    </div>
  );
}

export function LLD() {
  return (
    <div className=''>
      <Lottie animationData={lld}  style={style} />
    </div>
  );
  }  
