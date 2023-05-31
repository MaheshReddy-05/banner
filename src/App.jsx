import React from 'react';
import Banner from "./components/hero/Hero";
import SocialMedia from "./components/Cards/SocialMedia"
import Footer from './components/footer/Footer';
import CDP from './components/Cards/CDP';
import FAQComponent from './components/FAQ/FAQComponent';
import Community from './components/community/Community';
import WYG from './components/whatyouget/WYG';
import HROH from './components/HROH/HROH';
import L from './components/HROH/L';

function App() {
  return (
    <div className='mx-auto  overflow-hidden '>
      <div className="bg-[#111827]">
        <div className="mx-auto max-w-7xl">
              <div className=""> 
                <Banner ></Banner>
              </div>
          </div>
      </div>
      <div  className=" bg-white">
        <div className="mx-auto max-w-7xl ">
              <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className=''>
        <div className='mx-auto max-w-7xl flex justify-center'>
          <CDP></CDP>
        </div>
      </div>
      <div>
        <div>
          <WYG></WYG>
        </div>
      </div>
      <div>
        <div>
          <HROH></HROH>
          <L></L>
        </div>
      </div>
      <div>
        <div>
          <Community></Community>
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className='mx-40'>
          <FAQComponent></FAQComponent>
        </div>
      </div>
      <div className="bg-[#1f2937]">
        <div className="mx-auto max-w-7xl">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
