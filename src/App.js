import './App.css';
import Footer from './views/footer/footer';
import Navbar from './views/navbar/navbar';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
