import React from 'react';
import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";
import SocialMedia from "./components/Cards/SocialMedia"
import Scp from './components/testimons/Scp';

function App() {
  return (
    <div>
      <div className="bg-[#111827]">
        <div className="mx-40">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className=" flex justify-center mx-60">
              <div className=""> 
                <Banner ></Banner>
              </div>
          </div>
      </div>
      <div  className=" bg-gray-800">
        <div className="mx-60">
              <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className="bg-[#111827]">
          <Scp></Scp>
      </div>

      
    </div>
  );
}

export default App;
