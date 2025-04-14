import React from "react";
import "../styles/about.scss"
import Image from "next/image";

const Languages = () => {

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

                            <img src="/languages-2/javascript-original 1.png" alt="JavaScript" height={130} width={130} />

                        </div>

                        <div className="Section3-languages-JavaScript-text">

                            <h3>JavaScript</h3>

                        </div>

                    </div>

                    <div className="Section3-TypeScript">

                        <div className="Section3-languages-TypeScript">

                            <img src="/languages-2/typescript-original 1.png" alt="TypeScript" height={130} width={130} />

                        </div>

                        <div className="Section3-languages-TypeScript-text">

                            <h3>TypeScript</h3>

                        </div>

                    </div>

                </div>

                <div className="Section3-languages-2">

                    <div className="Section3-React">

                        <div className="Section3-languages-React">

                            <img src="/languages-2/react-brands 1.png" alt="React" height={150} width={150} />

                        </div>

                        <div className="Section3-languages-React-text">

                            <h3>React</h3>

                        </div>

                    </div>

                    <div className="Section3-SCSS">

                        <div className="Section3-languages-SCSS">

                            <img src="/languages-2/sass-original 1.png" alt="SCSS" height={170} width={170} />

                        </div>

                        <div className="Section3-languages-SCSS-text">

                            <h3>SCSS</h3>

                        </div>

                    </div>

                    <div className="Section3-TailwindCSS">

                        <div className="Section3-languages-TailwindCSS">

                            <img src="/languages-2/tailwindcss-mark.d52e9897 1.png" alt="TailwindCSS" height={95} width={165} />

                        </div>

                        <div className="Section3-languages-TailwindCSS-text">

                            <h3>TailwindCSS</h3>

                        </div>

                    </div>

                    <div className="Section3-NextJs">

                        <div className="Section3-languages-NextJs">

                            <img src="/languages-2/nextjs-original 1.png" alt="Next.js"  />

                        </div>

                        <div className="Section3-languages-NextJs-text">

                            <h3>Next.js</h3>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};
export default Languages;
