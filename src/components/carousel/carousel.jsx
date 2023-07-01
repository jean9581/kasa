import './carousel.scss'

function Carousel(props) {
  return (
    <>
      <div className='carousel'>
        <img src={props.imgUrl} alt="" />
      </div>
      </>
   
  )
}
export default Carousel