import './App.scss';
import Herocard from '../Herocard/Herocard';
import Navbar from '../Navbar/Navbar';



const title= "Lorem ipsum dolor";
const body= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ultricies sollicitudin eget tellus nec orci, mi. Pharetra sit egestas sit amet, purus. Eget ornare faucibus et volutpat. In elit adipiscing massa non magna id.";
const buttonText= "Contact";

const App = () => {
  return (
    <div className="landing-section">
      <div className="content-container">
        <Navbar />
        <Herocard 
          heroCardTitle={title}
          heroCardBody={body}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}

export default App;
