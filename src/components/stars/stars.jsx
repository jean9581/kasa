
import './stars.scss'

function Stars({rating}) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="star">

            {stars.map((index) => 
                rating >= index ? (
                    <i className="fas fa-star star_full" key={index}></i>
                    ) : (
                    <i className="fas fa-star star_empty" key={index}></i>)
            )}

        </div>
    )
}
export default Stars