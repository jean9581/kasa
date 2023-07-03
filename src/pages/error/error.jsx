import image from '../../assets/404.png'
import './error.scss';
import {NavLink} from "react-router-dom"

function error() {
  return (
    <>
    <div className="error">
      <div  className="error_img">
        <img src={image} alt="error" />
      </div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to= '/'>Retourner sur la page d'accueil</NavLink>
    </div>
    </>
  );
}

export default error;
