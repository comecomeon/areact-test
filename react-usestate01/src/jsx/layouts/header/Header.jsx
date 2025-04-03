import React from 'react';
import '@cssLayout/header/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner--common">
                <h1 className="header__logo">
                    <Link to="/">MegaStudy</Link>
                </h1>
                <nav className="header__nav">
                    <ul>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/state01">state01</Link></li>
                        <li><Link to="/state02">state02</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
