import './about.scss';
import Collapse from '../../components/collapse/collapse';
import Banner from '../../components/banner/banner';
import imgBanner from '../../assets/font_apropos.png'

function About() {
  return (
    <div className="about">

        <Banner title ="" image= {imgBanner} nameOfClasse = "banner bannerAbout"/>

        <div className='about_collapse'>
          <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
          <Collapse title="Respect" content="La biencéance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme."/>
          <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
          <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
        
    </div>
  );
}

export default About;