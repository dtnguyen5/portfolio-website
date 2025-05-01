import React from "react";
import "../styles/about.scss";
import { faSchool, faGraduationCap, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VzdelavaciItem {
  icon: "school" | "graduation" | "location";
  title: string;
  years?: string;
}

const educationData: VzdelavaciItem[] = [
  {
    icon: "school",
    title: "21. ZŠ Plzeň",
    years: "2015/2023",
  },
  {
    icon: "graduation",
    title: "SŠ INFIS – IT obor",
    years: "2023/ do současnosti",
  },
];

const locationItem: VzdelavaciItem = {
  icon: "location",
  title: "Místo: Plzeň",
};

const getIcon = (type: VzdelavaciItem["icon"]) => {

    console.log("Ikona typu:", type);
    switch (type) {
        case "school":
        return <FontAwesomeIcon icon={faSchool} className="Vzdelani-icon" />;
        case "graduation":
        return <FontAwesomeIcon icon={faGraduationCap} className="Vzdelani-icon" />;
        case "location":
        return <FontAwesomeIcon icon={faLocationDot} className="Vzdelani-icon-small" />;
        default:
        return null;
    }
};

const Vzdelani: React.FC = () => {

  return (

    <div className="Section4-Obsah">

         <div className="Vzdelavani-section">

            <div className="Vzdelani-obsah">

                {educationData.map((item, index) => (

                    <div key={index} className="Vzdelani-item">

                        <div className="Vzdelani-icon-container">{getIcon(item.icon)}</div>

                        <span className="Vzdelani-text-container">

                            {item.title} {item.years && `- ${item.years}`}

                        </span>

                    </div>

                ))}

                <div className="Vzdelani-location">

                    <div className="Vzdelani-icon-container-small">{getIcon(locationItem.icon)}</div>

                    <span className="Vzdelani-text-container-small">{locationItem.title}</span>

                </div>

            </div>

        </div>

    </div>
  );
};

export default Vzdelani;
