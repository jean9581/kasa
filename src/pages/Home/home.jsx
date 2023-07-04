import Banner from "../../components/banner/banner";
import './home.scss';
import Cart from '../../components/cart/cart';
import imgBanner from '../../assets/font.png'

function Home() {
  return (
    <>
    <div className="home">
      <div className="home_banner">
        <Banner title = "Chez vous, partout et ailleurs" image = {imgBanner} nameOfClasse = "banner bannerHome"/>
      </div>
    
    <Cart />
    </div>
      
    </>
  );
}

export default Home;
