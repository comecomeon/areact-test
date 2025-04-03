import React from 'react';
import '@cssLayout/footer/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner--common">
                <p className="footer__copyright">
                    ⓒ 2025 MegaStudy. All rights reserved.
                </p>
                <ul className="footer__links">
                    <li><a href="/terms">이용약관</a></li>
                    <li><a href="/privacy">개인정보처리방침</a></li>
                    <li><a href="/contact">고객센터</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
