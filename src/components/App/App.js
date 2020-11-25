import './App.scss';
import Herocard from '../Herocard/Herocard';
import Navbar from '../Navbar/Navbar';

const App = () => {
  return (
    <div className="landing-section">
      <Navbar />
      <Herocard 
        heroCardTitle="Lorem ipsum dolor"
        heroCardBody="this is the body"
        buttonText="Contact"
      />
    </div>
  );
}

export default App;
