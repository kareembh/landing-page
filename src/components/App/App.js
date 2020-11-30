import './App.scss';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import Layout from '../Layout/Layout';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';


const App = () => (
  <div className="landing-section">
    <Navbar />
    {/* Landing section*/}
    <Landing />

    {/* Portfolio section*/}
    <Portfolio />

    {/* About section*/}
    <About />

    {/* Services section*/}
    <Services />

    {/* Contact section*/}
    <Contact />
  </div>
);

export default App;
