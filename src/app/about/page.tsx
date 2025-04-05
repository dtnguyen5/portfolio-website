import "@/styles/about.scss";
import "@/styles/navbar.scss"
import Tools from "@/components/tools";
import Languages from"@/components/languages";

const about = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

    <main>

      <div className="Section1">

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

      </div>

      <div className="Section2">

        <div className="Nadpis-Section2">

            <h2 className="Nadpis2">Moje vývojářské prostředí</h2>

        </div>

        <div className="Section2-Obsah">

          <Tools/>

        </div>

      </div>

      <div className="Section3">

        <div className="Nadpis-Section3">

          <h2 className="Nadpis3">Technologie</h2>

        </div>

        <div className="Section3-Obsah">

          <Languages/>

        </div>

      </div>

      <div className="Section4">



      </div>

    </main>

  );
} 
export default about;