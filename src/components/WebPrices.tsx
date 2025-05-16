import "@/styles/prices.scss"
import Image from "next/image";
import Button from "@/components/Button"

const WebPrices = () => {

    return(

        <>
        
        <div className="web-prices-box1">
            
            <div className="web-prices-box1-text-and-content">

                <div className="web-prices-box1-text-inside">

                    <h2 id="web-box1-text">Jednoduchý web</h2>

                </div>

                <div className="web-prices-box1-content">

                    <div className="web-prices-box1-content-prize">

                        <h2 className="web-prices">2999<sup className="prices-index">99</sup></h2> <h2 className="web-prices-crown">Kč</h2>

                    </div>

                    <div className="web-prices-box1-content-obsah">

                        <div className="web-prices-box1-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text">

                                <p>Výběr podle šablon</p>

                            </div>

                        </div>

                        <div className="web-prices-box1-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text" id="prices-text">

                                <p>Základní nastavení a konzultace</p>

                            </div>

                        </div>

                        <div className="web-prices-box1-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                             <div className="prices-text">

                                <p>Doména a hosting</p>

                            </div>

                        </div>

                        <div className="web-prices-box1-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text">

                                <p>Responzivní design</p>

                            </div>
                            
                        </div>

                    </div>

                </div>

                <div className="web-prices-box1-content-button">

                    <div className="web-prices-box1-content-button-inside">

                        <Button label="Mám zájem" target="/contacts"/>

                    </div>

                </div>

            </div>

        </div>

        <div className="web-prices-box2">
            
            <div className="web-prices-box2-text-and-content">

                <div className="web-prices-box2-text-inside">

                    <h2 id="web-box1-text">Web na míru</h2>

                </div>

                <div className="web-prices-box2-content">

                    <div className="web-prices-box2-content-prize">

                        <h2 className="web-prices">5999<sup className="prices-index">99</sup></h2> <h2 className="web-prices-crown">Kč</h2>

                    </div>

                    <div className="web-prices-box2-content-obsah">

                        <div className="web-prices-box2-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text" id="prices-text">

                                <p>Design vytvořený na míru</p>

                            </div>

                        </div>

                        <div className="web-prices-box2-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text" id="prices-text">

                                <p>Redakční systém</p>

                            </div>

                        </div>

                        <div className="web-prices-box2-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                             <div className="prices-text">

                                <p>Doména a hosting</p>

                            </div>

                        </div>

                        <div className="web-prices-box2-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text">

                                <p>Responzivní design</p>

                            </div>
                            
                        </div>

                        <div className="web-prices-box2-content-obsah-text">

                            <img src="/Vector.svg" alt="" height={35} width={75} />

                            <div className="prices-text">

                                <p>SEO</p>

                            </div>
                            
                        </div>

                    </div>

                </div>

                <div className="web-prices-box2-content-button">

                    <div className="web-prices-box2-content-button-inside">

                        <Button label="Mám zájem" target="/contacts"/>

                    </div>

                </div>

            </div>

        </div>

        </>

    );

}
export default WebPrices;