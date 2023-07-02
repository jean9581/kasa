import './carousel.scss'
import { useState } from "react";
import leftArrow from "../../assets/left-arrow-backup-2-svgrepo-com.svg";
import rightArrow from "../../assets/right-arrow-backup-2-svgrepo-com.svg";

function Carousel({content , id}) {
  const [current, setCurrent] = useState(0);
  const length = content.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log("voyons",current)
  

  return (
    <>
      <div className='carousel'>
        {content.map((picture, index) => (
          <>
          <div 
            key={index}
            className={
              index === current
                ? "carousel_active"
                : "carousel_inactive"}
          >
            {index === current && (
              <div  className="carousel_img"
                    key={index + 1}
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                    url(${picture})`}} >
                <p className="carousel_conter" key={index + 2}> {index +1} / {length}</p>
              </div>
            )}
          </div>
          </>
        ))}
        {length > 1 ? (
        <>
          <div className='carousel_nav'>
              <div  className="carousel_nav_previous" 
                    onClick={prevImg}
                    style={{ backgroundImage: `url(${leftArrow})`}}
              >
              </div>
              <div  className="carousel_nav_next" 
                    onClick={nextImg}
                    style={{ backgroundImage: `url(${rightArrow})`}}
              >
              </div>
          </div>
          
        </>
        ) : null}
      </div>
    </>
   
  )
}
export default Carousel
