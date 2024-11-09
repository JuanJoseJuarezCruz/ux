import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import ProductInfo from './ProductInfo'; // Asegúrate de que esta línea esté presente y correcta
import Header from './Header'; // Importa el componente desde la carpeta "components"
import './StorePage.css'; // Importa tu archivo de CSS para estilos
import Footer from './Footer'; // Importa el componente Footer

export const MonitorPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

    const products = [
        { id: 4, name: 'ASUS ROG Swift PG259QN', price: 799.99, image: '/images/asus_rog_swift_pg259qn.jpg' },
        { id: 5, name: 'Samsung Odyssey G9', price: 1399.99, image: '/images/samsung_odyssey_g9.jpg' },
        { id: 6, name: 'LG UltraGear 27GN950-B', price: 849.99, image: '/images/lg_ultragear_27gn950b.jpg' },
        { id: 7, name: 'Acer Predator X27', price: 1499.99, image: '/images/acer_predator_x27.jpg' },
        { id: 8, name: 'BenQ EX2780Q', price: 499.99, image: '/images/benq_ex2780q.jpg' },
        { id: 9, name: 'MSI Optix MAG274QRF-QD', price: 449.99, image: '/images/msi_optix_mag274qrf_qd.jpg' },
        { id: 10, name: 'Gigabyte Aorus FI27Q-X', price: 579.99, image: '/images/gigabyte_aorus_fi27q_x.jpg' },
        { id: 11, name: 'Dell Alienware AW2521H', price: 899.99, image: '/images/dell_alienware_aw2521h.jpg' },
        { id: 12, name: 'ASUS TUF Gaming VG27AQ', price: 429.99, image: '/images/asus_tuf_gaming_vg27aq.jpg' },
        { id: 13, name: 'HP Omen X 27', price: 649.99, image: '/images/hp_omen_x27.jpg' },
        { id: 14, name: 'ViewSonic Elite XG270QG', price: 629.99, image: '/images/viewsonic_elite_xg270qg.jpg' },
        { id: 15, name: 'Samsung Odyssey G5', price: 349.99, image: '/images/samsung_odyssey_g5.jpg' },
        { id: 16, name: 'ASUS ROG Strix XG27AQM', price: 799.99, image: '/images/asus_rog_strix_xg27aqm.jpg' },
        { id: 17, name: 'AOC CU34G2X', price: 449.99, image: '/images/aoc_cu34g2x.jpg' },
        { id: 18, name: 'Razer Raptor 27', price: 699.99, image: '/images/razer_raptor_27.jpg' },
    
    ];

    const handleConsultPrice = () => {
        alert('Consultando precio...');
    };

    // Función para manejar el clic en un producto
    const handleProductClick = (product) => {
        setSelectedProduct(product); // Actualiza el producto seleccionado
    };

    return (
        <div>
            {/* Header */}
            <Header /> {/* Usa el componente Header */}
            
            <div className='Fondo'>
                <div className="store-page">
                    <main className="product-list">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                onConsultPrice={handleConsultPrice}
                                onClick={() => handleProductClick(product)}
                            />
                        ))}
                    </main>
                </div>

                {/* Muestra el componente ProductInfo si hay un producto seleccionado */}
                {selectedProduct && (
                    <ProductInfo product={selectedProduct} />
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};
