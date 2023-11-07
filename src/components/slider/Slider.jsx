import React from 'react';
import SlickSlider from 'react-slick';
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.jpg'
function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const SliderImages = [image1, image2, image3];

  return (<>
  <div>
        <SlickSlider {...settings}>
      {SliderImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </SlickSlider>
    </div>
  </>
    
    
  );
}

export default Slider;
