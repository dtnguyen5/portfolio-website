import { useEffect, useState } from "react";

// hook sleduje, jestli je šířka okna menší než určité hodnoty
// Jakmile se okno změní (resize), hook automaticky aktualizuje stav, takže se UI může dynamicky přizpůsobit.
const useMediaQuery = (query: string): boolean => {

  const [matches, setMatches] = useState(false); // Stav, jestli podmínka platí

  useEffect(() => {

    const media = window.matchMedia(query); // Vytvoří media query listener
    setMatches(media.matches);  // Nastaví úvodní hodnotu podle velikosti okna

    const listener = () => setMatches(media.matches); // Funkce na změnu stavu
    media.addEventListener("change", listener);  // Poslouchá změny šířky okna

    return () => media.removeEventListener("change", listener); // Cleanup při odpojení

  }, [query]); // Závisí na `query`, tedy třeba "(max-width: 768px)"


  return matches; // Vrací true/false podle toho, jestli podmínka platí
};

export default useMediaQuery;
