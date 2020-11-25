import './App.scss';
import Herocard from '../Herocard/Herocard';

function App() {
  return (
    <div className="landing-section">
      <Herocard 
        hero-card-title="Lorem ipsum dolor"
        hero-card-body="this is the body"
      />
    </div>
  );
}

export default App;
