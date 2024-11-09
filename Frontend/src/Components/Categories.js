import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const categories = [
    { title: 'PCs Gaming', imageUrl: 'https://todoclick.cl/modules/smartblog/images/13-large_default.jpg' },
    { title: 'Monitores', imageUrl: 'https://img.unocero.com/2023/08/image-79.png' },
    { title: 'Teclados', imageUrl: 'https://img.pccomponentes.com/pcblog/5971/mejores-teclados-mecanicos.jpg' },
    { title: 'Ratones', imageUrl: 'https://img.freepik.com/fotos-premium/mouse-juegos-computadora-alta-tecnologia-mueve-rapidamente-sobre-fondo-azul-luz-llamativa_908985-80579.jpg' },
    { title: 'Auriculares', imageUrl: 'https://cdn.trendhunterstatic.com/thumbs/463/haptic-feedback-gaming-headphone.jpeg?auto=webp' },
  ];

  return (
    <div className="categories-container">
      <h2></h2>
      <div className="row g-2 justify-content-center"> {/* g-2 reduce el espacio entre tarjetas */}
        {categories.map((category, index) => (
          <div className="col-auto" key={index}> {/* col-auto ajusta el tamaño según contenido */}
            <CategoryCard title={category.title} imageUrl={category.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
