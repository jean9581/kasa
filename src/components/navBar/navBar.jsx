import {NavLink} from "react-router-dom"
import './navBar.scss'
import logo from '../../assets/kasa.png'

function navBar() {
  return (
    <>
      <nav className="navbar">
          <div className='logo_navbar'>
              <img src={logo} alt='logo-kasa'  /> 
          </div>
          <NavLink to="/">Acceuil</NavLink>
          <NavLink to="/about">A propos</NavLink>
      </nav>
      
    </>
  );
}

export default navBar;
