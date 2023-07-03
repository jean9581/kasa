import Banner from "../../components/banner/banner";
import './home.scss';
import Cart from '../../components/cart/cart';
import imgBanner from '../../assets/font.png'

function Home() {
  return (
    <>
    <div className="home">
    <Banner title = "Chez vous, partout et ailleurs" image = {imgBanner}/>
    <Cart />
    </div>
      
    </>
  );
}

export default Home;
