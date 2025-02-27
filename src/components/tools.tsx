import React from "react";
import "../styles/about.scss"
import "../styles/navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons"; 
import { faIcons } from "@fortawesome/free-solid-svg-icons";

const tools = () =>{

    return(

        <div className="Section2-tools">

            <div className="Section2-tools-1">

                <div className="Section2-VScode">

                    <div className="VScode-Icon">

                        <img src="/tools/vscode.png" alt="" />

                    </div>

                    <div className="Section-2-textp">

                        <p>Visual Studio Code</p>

                    </div>

                </div>

                <div className="Section2-Figma">

                    <div className="Figma-Icon">

                        <img src="/tools/figma.png" alt="" />

                    </div>

                    <div className="Section-2-textp">

                        <p>Figma</p>

                    </div>
                    
                </div>

                <div className="Section2-GitHub">

                    <div className="GitHub-Icon">

                        <FontAwesomeIcon icon={faGithub} className="GH-Icon"/>

                    </div>

                    <div className="Section-2-textp">

                        <p>GitHub</p>

                    </div>

                </div>

            </div>

            <div className="Section2-Decoration">

                <div></div>

                <div></div>

                <div></div>

            </div>

            <div className="Section2-tools-2">

                <div className="Section2-ChatGPT">

                    <div className="ChatGPT-Icon">

                        <img src="/tools/chatgpt.png" alt="" />

                    </div>

                    <div className="Section-2-textp">

                        <p>ChatGPT</p>

                    </div>

                </div>

                <div className="Section2-GIMP">

                    <div className="GIMP-Icon">

                        <img src="/tools/gimp.png" alt="" />

                    </div>

                    <div className="Section-2-textp">

                        <p>GIMP</p>

                    </div>

                </div>

                <div className="Section2-FontAwesome">

                    <div className="FontAwesome-Icon">

                     <FontAwesomeIcon icon={faIcons} className="FA-Icon"/>

                    </div>

                    <div className="Section-2-textp">

                        <p>FontAwesome</p>

                    </div>

                </div>

            </div>

        </div>
    );
};
export default tools;