import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>

      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;

