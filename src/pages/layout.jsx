import '../styles/global.scss'

import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import { Outlet } from 'react-router-dom';


function layout() {
  return (
    <>
        <div className='layout'>
            <div className='layout_hautPage'>
                <NavBar/>
                <Outlet/>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default layout;
