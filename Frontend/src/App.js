import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StorePage } from './Components/StorePage';
import { HomePage } from './Components/HomePage';
import { MonitorPage } from './Components/MonitorPage';
import { KeyboardsPage } from './Components/KeyboardsPage';
import { MousePage } from './Components/MousePage';
import { HeadsetPage } from './Components/HeadsetPage';
import './App.css';  // CSS global
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para la página de la tienda */}
          <Route path="/store" element={<StorePage />} />

          {/* Ruta para la página de monitores */}
          <Route path="/monitors" element={<MonitorPage />} />

          {/* Ruta para la página de teclados */}
          <Route path="/keyboards" element={<KeyboardsPage />} />

          {/* Ruta para la página de ratones */}
          <Route path="/mice" element={<MousePage />} />

          {/* Ruta para la página de auriculares */}
          <Route path="/headsets" element={<HeadsetPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
