import React from 'react';
import './header.scss';
import 'animate.css';

const Header = () => {

  return (
    <div id='header' className="header">
      {/* <video className='about__video' autoPlay muted loop>
        <source src="/public/progib.mp4" type="" />
      </video> */}
      <div className="container">
        <div className="header__box animate__animated animate__fadeIn animate__delay-0.5s">
          <h1 className="header__title animate__animated animate__zoomIn animate__delay-0.5s">Jang San'atining O'zgacha Talqini – <br />
            <span>
              Odilxon Kamolov
            </span>
          </h1>
          <p className="header__text animate__animated animate__fadeIn animate__delay-1s">
            Odilxon Kamolovning jang san'atidagi muvaffaqiyatlari, hayoti, g'alabalari va unga bo'lgan ilhomlantiruvchi yo'l haqida batafsil tanishing. Uning mashaqqatli mehnati va jasorati har bir jangda aks etadi.
          </p>
          <div className="header__links animate__animated animate__fadeIn animate__delay-1s">
            <a href="#about" className="header__link">Ko'proq</a>
            <a href="#contact" className="header__link">Follow</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
