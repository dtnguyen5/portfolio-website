import React from "react";
import "../styles/about.scss"
import Image from "next/image";

const languages = () => {

    return(

        <div className="Section3-languages">

            <div className="Section3-languages-obsah">

                <div className="Section3-HTML">

                    <div className="HTML-Text-Logo">

                        <img src="/languages/htmlLogo.png" alt="" />
                        <p>HTML5</p>

                    </div>

                    <div className="HTML-Percent">

                        <div id="HTML-Percent">

                            <p>85%</p>
                            
                        </div>

                    </div>

                </div>

                <div className="Section3-CSS">

                    <div className="CSS-Text-Logo">

                        <img src="/languages/css.png" alt="" />
                        <p>CSS3</p>

                    </div>

                    <div className="CSS-Percent">

                        <div id="CSS-Percent">

                            <p>80%</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};
export default languages;