import React from 'react'
import "./nav.scss"

const Nav = () => {
  return (
    <div className="nav">
        <div className="container">
            <div className="nav__box">
                <a href=""><h2 className='nav__logo'>Odilxon</h2></a>
                <ul className="nav__list">
                    <li className="nav__item"><a href="" className="nav__link">Asosiy</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Biografiya</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Yutuqlar</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Janglar</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Rasmlar</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Yangiliklar</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Aloqa</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Ijtimoiy tarmoqlar</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav