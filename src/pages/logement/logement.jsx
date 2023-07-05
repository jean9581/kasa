import { useParams } from "react-router-dom";
import React, { useEffect , useState } from 'react';
import Collapse from '../../components/collapse/collapse';
import data from '../../data/logement.json'
import Error from '../error/error';
import Carousel from '../../components/carousel/carousel'
import Tags from "../../components/tags/tags";
import Host from "../../components/host/host";
import './logement.scss'

function Logement() {

  const [logement, setLogement] = useState({
      tags: [],
      equipments: [],
      pictures: [],
      rating: '',
      host :{ name:'', picture:''}});

  const { id } = useParams();

  useEffect(() => {
    data.map((logement) => {
        if(logement.id === id){
            setLogement(logement)
        }
        return null;
    })
  },[id])
  
  if(logement.title === undefined){
    return <Error />
  }

// Logement correspond à un logement ( celui visiter par l'utilisateur )
  return (
    <>
      <div className="logement">

          <Carousel content ={logement.pictures}  />
          
          <div className="logement_head">
              <div className="logement_head_title">
                  <h1>{logement.title}</h1>
                  <h2>{logement.location}</h2>
                  <Tags title={logement.tags} />
              </div>
              <Host info={logement.host} rating={logement.rating} />
          </div>

          <div className="logement_description">
              <div className="logement_description_collapse">
                <Collapse title="Description" content={logement.description} />
              </div>
              <div className="logement_description_collapse">
                <Collapse title="Equipements" content={logement.equipments} />
              </div>
          </div>

      </div> 
    </>
  );
}

export default Logement;