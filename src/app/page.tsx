import "../styles/homepage.scss"
import Navbar from "../components/navbar"
import Image from "next/image";


const Homepage = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

      <Navbar />





  );
} 
export default Homepage;