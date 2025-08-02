import './App.css';
import Navbar from './components/navbar/Navbar';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DetailPage from './pages/detailPage/DetailPage';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/register/Register';
import PublicRoute from './components/routes/PublicRoute';
import Cart from './pages/cart/Cart';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Profile from './pages/profile/Profile';
import { getCurrentUser } from './features/auth/authThunk';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Checkout from './pages/checkout/Checkout';

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  useEffect(() => {
    const handleUnauthorized = () => {
      navigate("/login");
    };

    window.addEventListener("unauthorized", handleUnauthorized);

    return () => {
      window.removeEventListener("unauthorized", handleUnauthorized);
    };
  }, [navigate]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <Navbar/>
      <Routes>
        <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} /> 
        <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} /> 
        <Route path="/" element={<Home />} />  
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/menu/:id" element={<DetailPage />} /> 
        <Route path="/cart" element={<ProtectedRoute> <Cart /> </ProtectedRoute>} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} /> 
        <Route path="/checkout" element={<ProtectedRoute> <Checkout /> </ProtectedRoute>} /> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;