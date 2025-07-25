import './App.css';
import Navbar from './components/navbar/Navbar';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DetailPage from './pages/detailPage/DetailPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} />  
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/menu/:id" element={<DetailPage />} />      
      </Routes>
      <Footer/>
    </>
  );
}

export default App;