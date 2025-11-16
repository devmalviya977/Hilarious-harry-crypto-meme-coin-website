import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mission from "./pages/Mission/Mission";
import About from "./pages/AboutUs/About";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import TokenDetails from "./Components/TokenDetails";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App bg-[#F8EABA] items-center m-0">
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="about" element={<About />} />
          <Route path="tokenomics" element={<Tokenomics />} />
          <Route path="tokendetail" element={<TokenDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
