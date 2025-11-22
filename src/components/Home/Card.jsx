import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import logo from '../../assets/college/Satkhira-govt-college.jpg'
import card1 from '../../assets/college/card-1.jpg'
import card2 from '../../assets/college/card2.jpg'
import card3 from '../../assets/college/card3.jpg'
import card4 from '../../assets/college/card4.jpg'
import card5 from '../../assets/college/card5.jpg'
const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}
function Card() {
    const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )
    
  return (
     <div className="wrapper bg-gray-50 py-14">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 "><img className="w-full h-full" src={logo} alt="" /></div>
          <div className="carousel__cell number-slide2"><img className="w-full h-full" src={card1} alt="" /></div>
          <div className="carousel__cell number-slide3"><img className="w-full h-full" src={card2} alt="" /></div>
          <div className="carousel__cell number-slide4"><img className="w-full h-full" src={card3} alt="" /></div>
          <div className="carousel__cell number-slide5"><img className="w-full h-full" src={card4} alt="" /></div>
          <div className="carousel__cell number-slide6"><img className="w-full h-full" src={card5} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Card