import Banner from "../../components/banner/banner";
import './home.scss';
import Cart from '../../components/cart/cart';

function Home() {
  return (
    <>
    <div className="home">
    <Banner />
    <Cart />
    </div>
      
    </>
  );
}

export default Home;
