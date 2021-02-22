import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="https://google.com">React Antd</a>
                </div>
                <ul className="socials">
                    <li>
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className="copyright">Copyright &copy; {new Date().getFullYear()} React Antd</div>
                <BackTop>
                    <div className="goTop">
                        <i className="fas fa-arrow-circle-up"></i>
                    </div>
                </BackTop>
            </div>
        </div>
    );
}

export default AppFooter;
