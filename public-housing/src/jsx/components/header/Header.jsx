import React from 'react'
import '@cssComponents/header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='headerWrap'>
            <div className="header__inner--common">
                <h1>
                    <Link to="/" className="header__logo">임대주택</Link>
                </h1>
                <nav>
                    <ul className="header__nav">
                        <li><Link to="/sh">서울주택도시공사</Link></li>
                        <li><Link to="/lh">한국토지주택공사</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header