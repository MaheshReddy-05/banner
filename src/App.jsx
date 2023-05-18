import React from 'react';
import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";
import SocialMedia from "./components/Cards/SocialMedia"
import Footer from './components/footer/Footer';
import GridComponent from './components/Cards/GridComponent';
import FAQComponent from './components/FAQ/FAQComponent';

function App() {
  return (
    <div className='mx-auto  overflow-hidden '>
      <div className="bg-[#111827]">
        <div className="">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="mx-auto max-w-7xl">
              <div className=""> 
                <Banner ></Banner>
              </div>
          </div>
      </div>
      <div  className=" bg-gray-800">
        <div className="mx-auto max-w-9xl ">
              <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="mx-auto max-w-7xl">
        </div>
      </div>
      <div className=''>
        <div className='mx-auto max-w-7xl flex justify-center'>
          <GridComponent></GridComponent>
        </div>
      </div>
      <div>
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
