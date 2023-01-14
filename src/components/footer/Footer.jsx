import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kilala Dashina</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about"
                            className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio"
                            className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials"
                            className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/kilala-dashina-52b837204/"
                        className="footer__social-link"
                        target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/kdaxh/"
                        className="footer__social-link"
                        target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href="https://twitter.com/kdaxh_"
                        className="footer__social-link"
                        target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169;2023 Kilala Dashina, All rights reserved.
                </span>
            </div>
        </div>
    );
};

export default Footer;