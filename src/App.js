import AboutMe from "./components/About_Me";
import Footer from "./components/Footer";
import HeaderBackground from "./components/HeaderBg";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return ( 
    <div className="container">
      <header>
        <Navbar/>
        <HeaderBackground/>
      </header>
      <AboutMe/>
      <Services/>
      <Work/>
      <Footer/>
    </div>
   );
}

export default App;