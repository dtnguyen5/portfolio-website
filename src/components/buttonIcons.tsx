"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"; 
import "../styles/homepage.scss";

interface ButtonIconsProps {
  label: React.ReactNode;
  target: string;
}

const ButtonIcons: React.FC<ButtonIconsProps> = ({ label, target }) => {
  return (

    <a href={target} className="button-icon ">

        <FontAwesomeIcon icon={faInstagram} target="" className="i-icon"/>
        <FontAwesomeIcon icon={faSquareXTwitter} target="" className="i-icon"  />
        <FontAwesomeIcon icon={faFacebook} target="" className="i-icon" />
        <FontAwesomeIcon icon={faLinkedin} target="" className="i-icon" />
        
    </a>

  );
};

export default ButtonIcons;
