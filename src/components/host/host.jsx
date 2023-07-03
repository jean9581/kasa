import './host.scss'
import Stars from '../stars/stars'

function Host({info, rat}) {
    const completName = info.name.split(" ");
    const [name, lastname] = completName;
    return (
      <>
        <div className='host'>
            <div className='host_badge'>
                <div className='host_badge_name'>
                    <p>{name.trim()}</p>
                    <p>{lastname.trim()}</p>
                </div>
                
                <div className="host_badge_img"
                        style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                        url(${info.picture})`}} >
                </div> 
            </div>
            <div className='host_rating'>
                <Stars rating = {rat}/>
            </div>
        </div>
    </>
     
    )
  }
  export default Host