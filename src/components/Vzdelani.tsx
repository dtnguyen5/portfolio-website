import React from "react";
import "../styles/about.scss"
import { faSchool, faGraduationCap, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Typ pro jeden záznam vzdělání
interface vzdelavaciItemy{
    icon: "school" | "graduation" | "location";
    title: string;
    years?: string;
}

// Data
const vzdelavaciData: vzdelavaciItemy[] = [
    {
        icon: "school",
        title: "21.Zš Plzeň",
        years: "2015/2023",
    },
    {
        icon: "graduation",
        title: "SŠ INFIS – IT obor",
        years: "2023/ do současnosti",
    },
    {
        icon: "location",
        title: "Místo: Plzeň",
    },
];


// Funkce pro výběr správné ikony
const getIcon = (type: vzdelavaciItemy["icon"]) => {

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
}

const Vzdelani: React.FC = () => {

    return(

        <div className="Vzdelavani-section">

            <div className="Vzdedani-obsah">

                {vzdelavaciData.map((item, index) => (

                    <div key={index} className="Vzdelani-item">

                        <div className="Vzdelani-icon-container">
                            {getIcon(item.icon)}
                        </div>

                        <span className="Vzdelani-text-container">
                            {item.title} {item.years && ` - ${item.years}`}
                        </span>

                    </div>     
                    
                ))}

            </div>

        </div>
    )
}
export default Vzdelani;
