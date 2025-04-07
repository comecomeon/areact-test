import React, { useState } from 'react';
import '@cssLayout/header/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // 모바일 메뉴 열림 상태

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="header__inner--common">
                <h1 className="header__logo">
                    <Link to="/">React.js</Link>
                </h1>

                <button className="header__toggle" onClick={toggleMenu}>☰</button>

                <nav className={`header__nav ${isOpen ? 'is-open' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>홈</Link></li>

                        <li className="has-submenu">
                            <span>State</span>
                            <ul className="submenu">
                                <li><Link to="/state01" onClick={closeMenu}>state01</Link></li>
                                <li><Link to="/state02" onClick={closeMenu}>state02</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu">
                            <span>UseEffect</span>
                            <ul className="submenu">
                                <li><Link to="/useeffect01" onClick={closeMenu}>useEffect01</Link></li>
                                <li><Link to="/useeffect02" onClick={closeMenu}>useEffect02</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
