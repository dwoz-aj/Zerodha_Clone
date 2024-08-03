import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './landing_page/signup/Signup';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
