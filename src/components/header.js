import React from 'react';
import header from './header.module.css'
import Button from "./button";
import logo from '../images/logo/JD-Power-logo.webp'
const Header = () =>{
    return (
        <header className={header.head}>
            <nav className={header.nav}>
                <div className={header.row}>
                    <div className={header.row_left}>
                        <a href="/"><img src={logo} alt=""/></a>
                        <ul>
                            <li>Products & solutions</li>
                            <li>Resources</li>
                            <li>About us</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className={header.row_right}>
                        <ul>
                            <Button text={'Request a demo'} background={'#3574d6'} color={'#fff'}/>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
