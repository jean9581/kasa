
import NavBar from '../components/navBar/navBar'
import Footer from '../components/Footer/footer'
import { Outlet } from 'react-router-dom';


function Home() {
  return (
    <>
    <div className="home">
    <NavBar/>
    <Outlet/>
    <Footer />
    </div>
      
    </>
  );
}

export default Home;
