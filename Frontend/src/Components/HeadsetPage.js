import React from 'react';
import { ProductCard } from './ProductCard';
import Header from './Header'; // Importa el componente desde la carpeta "components"
import './StorePage.css'; // Importa tu archivo de CSS para estilos
import Footer from './Footer'; // Importa el componente Footer

export const HeadsetPage = () => {
    const products = [
        { id: 44, name: 'Corsair Virtuoso RGB Wireless SE', price: 209.99, image: '/images/corsair_virtuoso_rgb_wireless_se.jpg' },
{ id: 45, name: 'Astro A50 Wireless', price: 299.99, image: '/images/astro_a50_wireless.jpg' },
{ id: 46, name: 'Beyerdynamic MMX 300', price: 249.99, image: '/images/beyerdynamic_mmx_300.jpg' },
{ id: 47, name: 'SteelSeries Arctis 7P+', price: 169.99, image: '/images/steelseries_arctis_7p_plus.jpg' },
{ id: 48, name: 'EPOS H6PRO', price: 179.99, image: '/images/epos_h6pro.jpg' },
{ id: 49, name: 'Sony INZONE H9', price: 299.99, image: '/images/sony_inzone_h9.jpg' },
{ id: 50, name: 'Razer Kraken Tournament Edition', price: 89.99, image: '/images/razer_kraken_tournament_edition.jpg' },
{ id: 51, name: 'HyperX Cloud Alpha', price: 99.99, image: '/images/hyperx_cloud_alpha.jpg' },
{ id: 52, name: 'Logitech G733 Lightspeed', price: 129.99, image: '/images/logitech_g733_lightspeed.jpg' },
{ id: 53, name: 'Corsair HS80 RGB Wireless', price: 149.99, image: '/images/corsair_hs80_rgb_wireless.jpg' },
{ id: 54, name: 'Turtle Beach Stealth 700 Gen 2', price: 149.99, image: '/images/turtle_beach_stealth_700_gen_2.jpg' },
    ];

    const handleConsultPrice = () => {
        alert('Consultando precio...');
    };

    return (
        <div>
            <Header /> {/* Usa el componente Header */}
            
            <div className="Fondo">
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
