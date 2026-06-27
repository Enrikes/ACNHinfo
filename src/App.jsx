import { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import CatalogGrid from './components/catalog/CatalogGrid';
import FishPage from './pages/fishPage.jsx';
import InsectPage from './pages/insectPage.jsx';
import SeaCreaturePage from './pages/seaCreaturePage.jsx';
import VillagerPage from './pages/villagerPage.jsx';
import { Routes, Route } from 'react-router';
import CreatureDetail from './pages/detail/creatureDetail.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='fish' element={<FishPage />} />
        <Route path='insect' element={<InsectPage />} />
        <Route path='sea-creature' element={<SeaCreaturePage />} />
        <Route path='villager' element={<VillagerPage />} />
        <Route path='fish/:slug'element={<CreatureDetail />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
