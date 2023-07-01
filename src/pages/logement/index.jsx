import { useLocation } from "react-router-dom";
import React, { useEffect , useState } from 'react';
import Carousel from '../../components/carousel/carousel';
import Menu from '../../components/menu/menu';

function Logement() {
    const location = useLocation();
    console.log ("location:", location);
    console.log ("location:state", location.state.logementId);
    const [selectFlat, setSelectFlat] = useState();
    useEffect(fetchLogements, []);

    function fetchLogements(){
      fetch("logements.json")
      .then((res) => res.json()) 
      .then((flats) => {
            const flat = flats.find(flat => flat.id === location.state.logementId);
            setSelectFlat(flat);
      }) 
       
      .catch(console.error);
  
    }
    if (selectFlat == null) return <div>...loding</div>
    return (
        <>
        <div className="logement">
            <div>
                <Carousel imgUrl = {selectFlat.pictures[1]}/>
                <Menu description = {selectFlat.description}/>
            </div>
        </div>
        
        </>
    );
}

export default Logement;