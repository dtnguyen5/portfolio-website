"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"; 
import "../styles/homepage.scss";

interface ButtonIconsProps {
  label: React.ReactNode;
  target: string;
}

const ButtonIcons: React.FC<ButtonIconsProps> = ({ label, target }) => {
  return (

    <a href={target} className="button-icon ">

        <FontAwesomeIcon icon={faInstagram} className="i-icon"/>
        <FontAwesomeIcon icon={faSquareXTwitter} className="i-icon" />
        
    </a>

  );
};

export default ButtonIcons;
