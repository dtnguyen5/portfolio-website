import Image from "next/image";
import "@/styles/about.scss";

const contacts = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

    <main className="Section1">

      <div className="Profile-About-Page">

        <div className="Circle"></div>

      </div>

      <div className="About-Obsah">

        <div className="Nadpis">
  
          <h1>Webový vývojář/designer</h1>

        </div>

        <div className="About-text">

          <h2>O mně</h2>

          <div className="Text-popis">

            <p>Jsem webový vývojář z Plzně, specializuji se na tvorbu moderních a funkčních webových stránek. Mám základní zkušenosti s HTML, CSS a JavaScriptem, ale nejvíce pracuji s Reactem, SCSS a TypeScriptem, které mi umožňují vytvářet dynamické, rychlé a škálovatelné weby. Mým cílem je vytvářet nejen vizuálně atraktivní, ale také přehledné, responzivní a snadno udržovatelné webové stránky. Sleduji nejnovější trendy ve vývoji a neustále se zdokonaluji, abych svým klientům nabídl moderní a efektivní řešení.</p>

          </div>

        </div>

      </div>

    </main>

    


  );
} 
export default contacts;