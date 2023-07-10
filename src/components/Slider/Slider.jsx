import React, { useState } from 'react'
import './Slider.scss'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)
    
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlider( currentSlider === 0 ? 2 : currentSlider - 1)
  }

  const nextSlide = () => {
    setCurrentSlider( currentSlider === 2 ? 0 : currentSlider + 1)
  }

  return (
    <div className='slider'> 
        <div className="container" style={{transform:`translateX(-${100* currentSlider}vw)`}}> 
            <img src={data[0]} alt="" className="img" />
            <img src={data[1]} alt="" className="img" />
            <img src={data[2]} alt="" className="img" />
        </div> 
        <div className="icons">
        <div className="icon">
              <WestIcon onClick={prevSlide} />
          </div>
          <div className="icon">
                <EastIcon onClick={nextSlide} />
          </div>
        </div>
    </div>
  )
}

export default Slider
