import Home from "./Pages/Home/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
