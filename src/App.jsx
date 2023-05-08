import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="">
        <Navbar></Navbar>
        <div className='ml-30'> 
          <Banner ></Banner>
          <Banner ></Banner>
        </div>
    </div>
  );
}

export default App;
