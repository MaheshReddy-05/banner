import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="overflow-hidden bg-[#292d3e]">
      <div className="mx-20">
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
