import React from 'react'
import { Container } from 'reactstrap'

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Services',
        url: '#services'
    },
    {
        display: 'Portfolio',
        url: '#portfolio'
    },
    {
        display: 'Contact',
        url: '#contact'
    }
]

const Header = () => {
  return (
    <header className="header">
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h5>Cinthia Maldonado</h5>
                </div>
                <div className="nav__menu">
                    <ul className="nav__list">
                        {
                            navLinks.map((item,index)=>
                                (
                                    <li className="nav__item" key={index}>
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <div className="nav__rigth">
                    <button className="btn">Let's Talk</button>
                    <span className="mobile__menu"><i class="ri-menu-5-line"></i></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header;