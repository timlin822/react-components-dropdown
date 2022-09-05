import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import BlogPage from 'pages/BlogPage';
import ContactPage from 'pages/ContactPage';
import FeaturePage from 'pages/FeaturePage';
import ProductPage from 'pages/ProductPage';
import ServicePage from 'pages/ServicePage';
import LoginPage from 'pages/LoginPage';

import Navbar from 'components/navbar/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;