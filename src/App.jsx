import Banner from "./components/banner/Banner";
import Navbar from "./components/nav/Navbar";
import Card from "./components/Cards/Card"

function App() {
  return (
    <div className="overflow-hidden bg-[#111827] flex justify-center">
      <div className="mx-20 sm:mx-40">
        <Navbar></Navbar>
        <div className=''> 
          <Banner ></Banner>
        </div>
          <Card></Card>

      </div>
    </div>
  );
}

export default App;
