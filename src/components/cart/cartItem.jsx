import './cart.scss';
import {Link} from "react-router-dom"

function CartItem(propos) {
  return (
    <>
      
    <Link to="/description">
      <div className="cartItem"> 
        <img className="cartItem_img" src={propos.imgUrl} alt={propos.title} />
        <p className='cartItem_title'>{propos.title}</p> 
      </div>
    </Link> 
    </>
  );
}

export default CartItem;