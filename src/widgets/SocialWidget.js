import React from 'react';
import './SocialWidget.css';
import SocialWidgetArrow from '../assets/img/social_widget_arrow.svg';
import SocialWidgetInstagram from '../assets/img/social_widget_instagram.svg';
import SocialWidgetFacebook from '../assets/img/social_widget_facebook.svg';
import SocialWidgetLinkedin from '../assets/img/social_widget_linkedin.svg';

export default function SocialWidget() {
  return (
    <div className='SocialWidgetGlobals'>
      <img src={SocialWidgetArrow} alt='Redes Sociales' />
      <img src={SocialWidgetArrow} alt='Redes Sociales' />
      <a
        href='https://www.instagram.com/glossideas/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='SocialWidgetIcon'
          src={SocialWidgetInstagram}
          alt='Instagram'
        />
      </a>
      <a
        href='https://www.facebook.com/glossideas'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='SocialWidgetIcon'
          src={SocialWidgetFacebook}
          alt='Facebook'
        />
      </a>
      <a
        href='https://www.linkedin.com/company/glossmedia'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='SocialWidgetIcon'
          src={SocialWidgetLinkedin}
          alt='LinkedIn'
        />
      </a>
    </div>
  );
}
