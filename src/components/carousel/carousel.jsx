import './carousel.scss'
import { useState } from "react";
import next from '../../assets/arrowNext.svg'
import prev from '../../assets/arrowPreview.svg'

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
    <div className='carousel'>
      {content.map((picture, index) => (
        <>
          <div className={index === current ? "carousel_active" : "carousel_inactive"}>
            {index === current && (
              <div  className="carousel_img"
                    key={index}
                    style={{ backgroundImage: ` 
                    url(${picture})`}} >
                <p className="carousel_conter" key={index + 2}> {index +1} / {length}</p>
              </div>
            )}
            
          </div>
        </>
      ))}
      {length > 1 ? (
        <div className='carousel_nav'>
          <img src={prev} alt="" onClick={prevImg}/>
          <img src={next} alt="" onClick={nextImg}/>
        </div>
      ) : null}
    </div> 
  )
}
export default Carousel
