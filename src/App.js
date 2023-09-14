
import { Outlet } from 'react-router-dom';
import '../src/assets/css/App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
