import Image from "next/image";
import "@/styles/prices.scss"
import WebPrices from "@/components/WebPrices";


const prices = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

      <div className="main-content">  

        <div className="web-text">

          <h1 id="web-text-content">Weby</h1>

        </div>

        <div className="main-content-obsah">

          <div className="web-prices-box1-box2">

            <WebPrices />

          </div>

        </div>

      </div>

  );
} 
export default prices;