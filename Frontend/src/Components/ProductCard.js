import React from 'react'

export const ProductCard = ({ name, price, image, onConsultPrice }) => {
  
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p className="price">{price ? `$${price}` : 'Consultar precio'}</p>
      <button className="consult-btn" onClick={onConsultPrice}>
        {price ? 'Informacion' : 'Consultar precio'}
      </button>
    </div>
  )
}
