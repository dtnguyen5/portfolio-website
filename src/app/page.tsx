import "../styles/homepage.scss"
import Navbar from "../components/navbar"
import Button from "../components/button"
import Image from "next/image";


const Homepage = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

    <div className="main-content">

      <div className="nav-content">

        <Navbar />

      </div>

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

      </main>

    </div>


  );
} 
export default Homepage;