import './App.scss';
import Herocard from '../Herocard/Herocard';
import Navbar from '../Navbar/Navbar';

const App = () => (
  <div className="landing-section">
    <div className="content-container">
      <Navbar />
      <Herocard 
        heroCardTitle="Lorem ipsum dolor"
        heroCardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ultricies sollicitudin eget tellus nec orci, mi. Pharetra sit egestas sit amet, purus. Eget ornare faucibus et volutpat. In elit adipiscing massa non magna id."
        buttonText="Contact"
      />
    </div>
  </div>
);


export default App;
