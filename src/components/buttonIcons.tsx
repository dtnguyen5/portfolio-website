"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"; 
import "../styles/homepage.scss";

interface ButtonIconsProps {
  label: React.ReactNode;
  target: string;
}

const ButtonIcons: React.FC<ButtonIconsProps> = ({ label, target }) => {
  return (

    <div className="button-icons">

        <a href="https://www.instagram.com/dtnguyen5_/" target="_blank" rel="noopener noreferrer">

          <FontAwesomeIcon icon={faInstagram} className="i-icon"/>

        </a>

        <a href="https://x.com/honza_ipad" target="_blank" rel="noopener noreferrer">

          <FontAwesomeIcon icon={faSquareXTwitter} className="i-icon" />

        </a>

        <a href="https://www.facebook.com/honza.nguyen.10297/" target="_blank" rel="noopener noreferrer">

          <FontAwesomeIcon icon={faFacebook} className="i-icon" />

        </a>
        
        <a href="https://www.linkedin.com/in/duy-tiep-nguyen-7325002a3/" target="_blank" rel="noopener noreferrer">

          <FontAwesomeIcon icon={faLinkedin} className="i-icon" />

        </a>

    </div>

  );
};

export default ButtonIcons;
