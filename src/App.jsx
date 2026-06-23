import { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import CatalogGrid from './components/catalog/CatalogGrid';
import FishPage from './pages/fishPage.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <FishPage />
      <Footer></Footer>
    </>
  );
}

export default App;
