import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Header from "./Components/header";
import NewArrivals from "./Components/NewArrivals";
import image1 from "./assets/home1.jpg";
import image2 from "./assets/home2.jpg";
import image3 from "./assets/home3.jpg";
import Carousel from "./Components/Carousel";

const slides =[image1,image3]
function App() {

  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Home/>
      <Carousel/>
      <NewArrivals />
    </div>
  );
}

export default App;
