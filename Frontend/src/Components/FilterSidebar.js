import React from 'react'

export const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h2>Filtrar</h2>
      <div className="filter-category">
        <h4>Precio</h4>
        <input type="range" min="0" max="1000" step="50" />
      </div>
      <div className="filter-category">
        <h4>Marca</h4>
        <ul>
          <li><input type="checkbox" /> Nvidia</li>
          <li><input type="checkbox" /> AMD</li>
          <li><input type="checkbox" /> Intel</li>
        </ul>
      </div>
      <div className="filter-category">
        <h4>Rendimiento</h4>
        <ul>
          <li><input type="checkbox" /> Alto</li>
          <li><input type="checkbox" /> Medio</li>
          <li><input type="checkbox" /> Bajo</li>
        </ul>
      </div>
    </div>
  )
}
