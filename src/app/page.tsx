import "../styles/homepage.scss"
import Button from "../components/button"
import Icons from "../components/buttonIcons"
import Image from "next/image";


const Homepage = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

      <main>

        <div className="text-content-main">

          <div className="text-content">

            <h1>Zdravím tady Honza!</h1>

            <h2>Web developer</h2>

            <div className="content-obsah">

              <div className="content-obsah-text">

                <p>Zde najdete ukázky mých webových projektů. Tvořím moderní a funkční weby – podívejte se na mé práce a ozvěte se pro spolupráci! </p>

              </div>  

            </div>

            <div className="Buttons">

              <div className="Buttons-obsah">

                <Button label="Start" target="/about"/>
                <Button label="Zkontaktovat" target="/contacts"/>

              </div>

            </div>

          </div>

        </div>

        <div className="Profile-content">

          <div className="Profile">

            <div className="Profile-place">

              <div className="Profile-circle"></div>

            </div>

            <div className="Profile-name">

              <h2>Nguyen Duy Tiep</h2>

            </div>

            <div className="Social-media-icons">

              <div className="Icons">

                <Icons label="" target=""/>

              </div>

            </div>

          </div>

        </div>

      </main>

  );
} 
export default Homepage;