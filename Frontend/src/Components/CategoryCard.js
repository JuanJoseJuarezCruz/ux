import React from 'react';
import './CategoryCard.css'; // Archivo CSS para personalizar las tarjetas

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <div className="card category-card-small"> {/* Cambiamos la clase */}
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href="#" className="btn btn-primary btn-sm">Ver más</a> {/* Botón más pequeño */}
      </div>
    </div>
  );
};

export default CategoryCard;
