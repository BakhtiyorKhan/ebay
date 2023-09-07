import { Outlet } from 'react-router-dom';
import '../src/assets/css/App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Outlet/>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
