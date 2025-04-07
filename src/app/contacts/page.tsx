import Navbar from "../../components/Navbar"
import Image from "next/image";
import { FormProvider } from "@/providers/FormProvider"; 
import ContactForm from "@/components/ContactForm"; 


const contacts = async () => {

  await new Promise ((resolve) => setTimeout(resolve, 100));
  
  return(

    {/* // použiti jeste ne
    <FormProvider>
    <ContactForm />
    </FormProvider>
    */}



  );
} 
export default contacts;