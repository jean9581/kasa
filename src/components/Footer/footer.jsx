import './footer.scss';
import logo from '../../assets/kasa_black.PNG'

function Footer() {
  return (
      <div className="footer">

        <div className='footer_logo'>
            <img src={logo} alt='logo-kasa'  />
        </div>
        
        <div className='footer_text'>
            © 2020 kasa. All rights reserved
        </div>

      </div>
  );
}

export default Footer;