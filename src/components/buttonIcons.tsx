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

      <a href={target} target="_blank" rel="noopener noreferrer">

        <FontAwesomeIcon icon={faInstagram} className="i-icon"/>
        {label && <span>{label}</span>}  

      </a>

      <a href={target} target="_blank" rel="noopener noreferrer">

        <FontAwesomeIcon icon={faSquareXTwitter} className="i-icon" />
        {label && <span>{label}</span>}

      </a>

      <a href={target} target="_blank" rel="noopener noreferrer">

        <FontAwesomeIcon icon={faFacebook} className="i-icon" />
        {label && <span>{label}</span>}

      </a>

      <a href={target} target="_blank" rel="noopener noreferrer">

        <FontAwesomeIcon icon={faLinkedin} className="i-icon" />
        {label && <span>{label}</span>}

      </a>

    </div>
  );
};

export default ButtonIcons;
