import React from 'react';
import './Homepage.css';
import HomeSearchIcon from '../assets/img/home_search_icon.svg';
import SocialWidget from '../widgets/SocialWidget';
import OportunidadesContainer from '../containers/OportunidadesContainer';
import HomepageCarousel from '../components/HomepageCarousel';


export default function Homepage() {
    return (
        <div className="HomePageGlobals">
            <HomepageCarousel />
            <SocialWidget />
            <hr />
            <h5 className="HomPageText">Usa el simulador de campañas para encontrar el mejor mix de OOH</h5>
            <h6 className="HomPageText">Registrate  y pedi tu cotizacion online</h6>
            <div className="HomeSearchButton">
                <p className="HomeSearchText">Encontrá las mejores opciones para tu campaña</p>
                <img className="HomeSearchIcon" src={HomeSearchIcon} alt="buscar"/>
            </div>
            <h6 className="HomPageText">OPRTUNIDADES DE ESTE MES</h6>
            <OportunidadesContainer />   
        </div>
    )
}
