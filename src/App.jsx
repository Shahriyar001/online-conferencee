import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
