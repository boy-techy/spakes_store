import React from 'react';
import Slider from  'react-slick';

const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider-custom-style",
    fade: true
};

const CustomSlider = ({settings,imageUrls=[]}) => {

    settings = {...defaultSettings,...settings};

    let crouselImages = imageUrls.map((imageUrl,index)=>{
         return (<div key={index}>
             <img src={imageUrl.src} alt={imageUrl.alt}/>
         </div>)
    });


    return(
            <Slider {...settings}>
                { crouselImages }
            </Slider>
    )
};

export default CustomSlider;