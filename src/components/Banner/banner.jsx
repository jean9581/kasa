import './banner.scss'

function Banner({title , image}) {
  return (
  <>
    <div className='banner'>
      <div  className="banner_img"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
            url(${image})`}} >
            <p className='banner_text'>{title}</p>
      </div>
    </div>
  </>
  )
}

export default Banner