import { useFormContext } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data: any) => {
    console.log("Odesláno:", data);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} placeholder="Jméno" required />
      <input {...register("email")} type="email" placeholder="Email" required />
      <textarea {...register("message")} placeholder="Zpráva" required />
      <button type="submit">Odeslat</button>
      
    </form>

  );
}
