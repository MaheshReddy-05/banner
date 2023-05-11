import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";
import SocialMedia from "./components/Cards/SocialMedia"

function App() {
  return (
    <div>
      <div className="bg-[#111827]">
        <div className="mx-20 sm:mx-40">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="flex justify-center mx-40 ">
              <div className=""> 
                <Banner ></Banner>
              </div>

          </div>
      </div>
      <div  className=" bg-gray-800">
        <div className="mx-40">
                  <SocialMedia></SocialMedia>
        </div>
      </div>
      
    </div>
  );
}

export default App;
