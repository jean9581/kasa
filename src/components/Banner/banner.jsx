import './banner.scss'

function Banner({title , image, nameOfClasse}) {

  return (
  <>
    <div className={nameOfClasse}>
      <div  className='banner_img'
            style={{ backgroundImage: `linear-gradient(180deg, rgba(140, 140, 140, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), 
            url(${image})`}} >
            <div className='banner_text'>
                    <p>{title}</p>
            </div>
      </div>
    </div>
  </>
  )
}

export default Banner