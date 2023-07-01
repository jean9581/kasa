import './cart.scss';
import {Link} from "react-router-dom"

function CartItem(props) {
  return (
    <>
      
    <Link 
      to="/description" 
      state = {{logementId: props.id}}>
      <div className="cartItem"> 
        <div className="cartItem_img">
          <img  src={props.imgUrl} alt={props.title} />
        </div>
        <p className='cartItem_title'>{props.title}</p> 
      </div>
    </Link> 
    </>
  );
}

export default CartItem;