import './App.css';
import Navbar from './components/navbar/Navbar';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/menu" element={<Menu/>} />      
      </Routes>
      <Footer/>
    </>
  );
}

export default App;