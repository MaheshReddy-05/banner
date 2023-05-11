import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="overflow-hidden bg-[#111827] flex justify-center">
      <div className="mx-20 sm:mx-40">
        <Navbar></Navbar>
        <div className=''> 
          <Banner ></Banner>
          <Banner ></Banner>
        </div>

      </div>
    </div>
  );
}

export default App;
