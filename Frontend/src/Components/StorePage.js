import React from 'react';
import { ProductCard } from './ProductCard';
import Header from './Header'; // Importa el componente desde la carpeta "components"
import './StorePage.css'; // Importa tu archivo de CSS para estilos
import Footer from './Footer'; // Importa el componente Footer


export const StorePage = () => {
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

    
    // Productos de teclados
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