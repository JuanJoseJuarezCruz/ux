import React from 'react'
import Header from './Header'; 
import ImageSlider from './ImageSlider';
import Categories from './Categories'; // Importa el componente de categorías
import Footer from './Footer'; // Importa el componente Footer
import './HomePage.css';

export const HomePage = () => {
  return (
    <div >



      <Header /> {/* Usa el componente Header */} 
      <div className='Fondo'>

        <ImageSlider /> {/* Usa el componente ImageSlider */}
      
        <Categories /> {/* Usa el componente de categorías */}
        {/* Otros componentes */}

      </div>
      <Footer /> {/* Añade el Footer aquí */}
      
    </div>
  )
}
