import React from 'react';
import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";
import SocialMedia from "./components/Cards/SocialMedia"
import Scp from "./components/testimons/Scp";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <div className="bg-[#111827]">
        <div className="">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className=" flex justify-center mx-20">
              <div className=""> 
                <Banner ></Banner>
              </div>
          </div>
      </div>
      <div  className=" bg-gray-800">
        <div className="">
              <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="mx-60">
          <Scp></Scp>
        </div>
      </div>
      <div className="bg-[#1f2937]">
        <div className="mx-40">
          <Footer></Footer>
        </div>
      </div>

      
    </div>
  );
}

export default App;
