import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left Side Text */}
                <div className="footer-left">

                    <h1 className="footer-name">
                      <span>Sidra</span> Malik
                    </h1>
                    <p className="footer-role">Frontend Web Developer</p>
                </div>

                {/* Right Side Social Icons & Links */}
                <div className="footer-right">
                    <div className="social-icons">
                        <a
                            href="https://github.com/SidraUrooj321"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sidra-malik-339642388/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Sidra Malik. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;