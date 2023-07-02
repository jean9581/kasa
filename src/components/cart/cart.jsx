import "./cart.scss";
import data from "../../data/logement.json";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="cart">
        {data.map((logement) => (
          <NavLink className="cartItem" key={logement.id} to={`/logement/${logement.id}`}>
              <div className="cartItem_img" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                  url(${logement.cover})`}} >
                  <p className="cartItem_title">{logement.title}</p>
              </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Cart;
