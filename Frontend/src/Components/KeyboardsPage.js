import React from 'react';
import { ProductCard } from './ProductCard';
import Header from './Header'; // Importa el componente desde la carpeta "components"
import './StorePage.css'; // Importa tu archivo de CSS para estilos
import Footer from './Footer'; // Importa el componente Footer

export const KeyboardsPage = () => {
    const products = [
        { id: 19, name: 'Corsair K95 RGB Platinum XT', price: 199.99, image: '/images/corsair_k95_rgb_xt.jpg' },
    { id: 20, name: 'SteelSeries Apex Pro', price: 199.99, image: '/images/steelseries_apex_pro.jpg' },
    { id: 21, name: 'Razer Huntsman Elite', price: 229.99, image: '/images/razer_huntsman_elite.jpg' },
    { id: 22, name: 'Logitech G915 TKL', price: 229.99, image: '/images/logitech_g915_tkl.jpg' },
    { id: 23, name: 'Ducky One 2 Mini', price: 109.99, image: '/images/ducky_one_2_mini.jpg' },
    { id: 24, name: 'HyperX Alloy Origins Core', price: 89.99, image: '/images/hyperx_alloy_origins_core.jpg' },
    { id: 25, name: 'Anne Pro 2', price: 99.99, image: '/images/anne_pro_2.jpg' },
    { id: 26, name: 'ASUS ROG Strix Scope RX', price: 159.99, image: '/images/asus_rog_strix_scope_rx.jpg' },
    { id: 27, name: 'Glorious GMMK Pro', price: 169.99, image: '/images/glorious_gmmk_pro.jpg' },
    { id: 28, name: 'Cooler Master CK552', price: 89.99, image: '/images/cooler_master_ck552.jpg' },

    ];

    const handleConsultPrice = () => {
        alert('Consultando precio...');
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
                            />
                        ))}
                    </main>
                </div>

                <Footer />
            </div>
        </div>
    );
};
