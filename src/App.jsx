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
import OSPA from './components/OSPA/OSPA';

function App() {
  return (
    <div className='mx-auto bg-[#1e2125] overflow-hidden '>
      <div >
        <div className="mx-auto max-w-7xl">
              <div className="bg-[#1e2125]"> 
                <Banner ></Banner>
              </div>
          </div>
      </div>
      <div  className=" bg-[#272a2e]">
        <div className="mx-auto max-w-7xl py-auto py-10">
              <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className="bg-white ">
        <div className='mx-auto max-w-7xl flex justify-center'>
          <CDP></CDP>
        </div>
      </div>
      <div>
        <div className='bg-[#1c262c]'>
          <WYG></WYG>
        </div>
      </div>
      <div>
        <div className='bg-gray-100'>
          <HROH></HROH>
          <L></L>
        </div>
      </div>
      <div className='bg-white'>
        <div>
          <OSPA></OSPA>
          <div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div>
          <Community></Community>
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className='mx-40'>
          <FAQComponent></FAQComponent>
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-7xl">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
