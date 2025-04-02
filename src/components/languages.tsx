import React from "react";
import "../styles/about.scss"
import Image from "next/image";

const languages = () => {

    return(

        <div className="Section3">

            <div className="Section3-obsah">

                <div className="Section3-languages-1">

                    <div className="Section3-HTML">

                        <div className="Section3-languages-HTML">

                            <img src="/languages-2/html5-original 1.png" alt="HTML" height={150} width={140}/>

                        </div>

                        <div className="Section3-languages-HTML-text">

                            <h3>HTML5</h3>

                        </div>

                    </div>

                    <div className="Section3-CSS">

                        <div className="Section3-languages-CSS">

                            <img src="/languages-2/css3-original 1.png" alt="CSS" height={150} width={140} />

                        </div>

                        <div className="Section3-languages-CSS-text">

                            <h3>CSS</h3>

                        </div>

                    </div>

                    <div className="Section3-JavaScript">

                        <div className="Section3-languages-JavaScript">

                            <img src="/languages-2/javascript-original 1.png" alt="JavaScript" height={150} width={150} />

                        </div>

                        <div className="Section3-languages-JavaScript-text">

                            <h3>JavaScript</h3>

                        </div>

                    </div>

                </div>

                <div>


                </div>

            </div>

        </div>

    );
};
export default languages;