
import NavBar from '../components/navBar/navBar'
import Footer from '../components/Footer/footer'
import { Outlet } from 'react-router-dom';


function layout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer />
    </>
  );
}

export default layout;
