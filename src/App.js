
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {
 return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
      <Portfolio/>
     <Experience/>
     <SocialLinks/>
     <Contact/>
    </div>
  );
}

export default App;
