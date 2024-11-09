import React from 'react';
import { ProductCard } from './ProductCard';
import Header from './Header'; // Importa el componente desde la carpeta "components"
import './StorePage.css'; // Importa tu archivo de CSS para estilos
import Footer from './Footer'; // Importa el componente Footer

export const MousePage = () => {
    const products = [
        { id: 29, name: 'Logitech G Pro X Superlight', price: 149.99, image: '/images/logitech_g_pro_x_superlight.jpg' },
        { id: 30, name: 'Razer DeathAdder V3 Pro', price: 129.99, image: '/images/razer_deathadder_v3_pro.jpg' },
        { id: 31, name: 'SteelSeries Rival 600', price: 79.99, image: '/images/steelseries_rival_600.jpg' },
        { id: 32, name: 'Glorious Model O Wireless', price: 89.99, image: '/images/glorious_model_o_wireless.jpg' },
        { id: 33, name: 'Corsair Dark Core RGB Pro SE', price: 99.99, image: '/images/corsair_dark_core_rgb_pro_se.jpg' },
        { id: 34, name: 'Zowie EC2', price: 69.99, image: '/images/zowie_ec2.jpg' },
        { id: 35, name: 'Cooler Master MM710', price: 49.99, image: '/images/cooler_master_mm710.jpg' },
        { id: 36, name: 'ASUS ROG Gladius II', price: 89.99, image: '/images/asus_rog_gladius_ii.jpg' },
        { id: 37, name: 'Roccat Kone Pro Air', price: 109.99, image: '/images/roccat_kone_pro_air.jpg' },
        { id: 38, name: 'HyperX Pulsefire Haste', price: 49.99, image: '/images/hyperx_pulsefire_haste.jpg' },
        { id: 39, name: 'Finalmouse Ultralight 2', price: 119.99, image: '/images/finalmouse_ultralight_2.jpg' },
        { id: 40, name: 'Logitech G502 Hero', price: 79.99, image: '/images/logitech_g502_hero.jpg' },
        { id: 41, name: 'Razer Basilisk V3', price: 69.99, image: '/images/razer_basilisk_v3.jpg' },
        { id: 42, name: 'SteelSeries Aerox 3 Wireless', price: 99.99, image: '/images/steelseries_aerox_3_wireless.jpg' },
        { id: 43, name: 'Corsair M65 RGB Elite', price: 59.99, image: '/images/corsair_m65_rgb_elite.jpg' },
        
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
