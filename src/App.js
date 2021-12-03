import React from 'react';
import { Routes, Route } from 'react-router';

import firebase, { FirebaseContext } from './firebase';

import Ordenes from './components/paginas/Ordenes';
import Stock from './components/paginas/Stock';
import Nuevo from './components/paginas/Nuevo';
import Sidebar from './components/ui/Sidebar';
import OrdenesTienda from './components/paginas/OrdenesTienda';
import StockBajo from './components/paginas/StockBajo';

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }} >

      <div className="md:flex min-h-screen">
          <Sidebar />

          <div className="md:w-2/5 xl:w-4/5 p-6">
            <Routes>
                <Route path="/" element={<Ordenes />  } />
                <Route path="/stock" element={<Stock />  } />
                <Route path="/nuevo" element={<Nuevo />  } />
                <Route path="/ordenes-tienda" element={<OrdenesTienda /> } />
                <Route path="/stock-bajo" element={<StockBajo /> } />
            </Routes>
          </div>
      </div>
      
    </FirebaseContext.Provider>
  )
}

export default App;
