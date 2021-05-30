import React from 'react';
import './SocialWidget.css'
import SocialWidgetArrow from '../assets/img/social_widget_arrow.svg';
import SocialWidgetInstagram from '../assets/img/social_widget_instagram.svg';
import SocialWidgetFacebook from '../assets/img/social_widget_facebook.svg';
import SocialWidgetLinkedin from '../assets/img/social_widget_linkedin.svg';



export default function SocialWidget() {
    return (
        <div className='SocialWidgetGlobals'>
            <img src={SocialWidgetArrow} alt="Redes Sociales" />
            <img src={SocialWidgetArrow} alt="Redes Sociales" />
            <img className="SocialWidgetIcon" src={SocialWidgetInstagram} alt="Instagram" />
            <img className="SocialWidgetIcon" src={SocialWidgetFacebook} alt="Facebook" />
            <img className="SocialWidgetIcon" src={SocialWidgetLinkedin} alt="LinkedIn" />
        </div>
    )
}
