import React from 'react';
import '@cssLayout/footer/footer.scss';

const Footer = () => {
    return (
        <footer className="footerWrap">
            <div className="footerWrap__inner--common">
                <p className="footerWrap__copyright">
                    ⓒ 2025 Dseok. All rights reserved.
                </p>
                <ul className="footerWrap__links">
                    <li><a href="/terms">이용약관</a></li>
                    <li><a href="/privacy">개인정보처리방침</a></li>
                    <li><a href="/contact">고객센터</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
