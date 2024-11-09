import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // Archivo CSS para agregar estilos personalizados

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container-small"> {/* Cambiamos la clase */}
      <h2></h2><br/>
      <Slider {...settings}>
        <div>
          <img src="https://pbs.twimg.com/media/EkZfI5MWAAAspdJ.jpg" alt="Producto 1" />
        </div>
        <div>
          <img src="https://www.anaitgames.com/images/uploads/2015/11/pc-gaming-lo-mejor-para-el-hombre-3.jpg" alt="Producto 2" />
        </div>
        <div>
          <img src="https://i.blogs.es/1bda7f/teclados-mecanicos-personalizables-wasd/1366_2000.jpg" alt="Producto 3" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSci7IXDaG-zkBRdD-uAwWSnz2KAwQHGFbg&s" alt="Producto 4" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
