"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/homepage.scss";
import "../styles/navbar.scss";

const Navbar = () => {
  // useState pro uchovávání aktuální cesty
  const [activeLink, setActiveLink] = useState<string>("");
  const pathname = usePathname();

  // useEffect pro aktualizaci stavu při změně pathname
  useEffect(() => {
    setActiveLink(pathname); // Uloží aktuální cestu do state
  }, [pathname]); // Efekt se spustí při změně pathname

  const navLinks: { label: string; href: string }[] = [
    { label: "Domů", href: "/" },
    { label: "O mně", href: "/about" },
    { label: "Ceny", href: "/prices" },
    { label: "Kontakty", href: "/contacts" },
  ];

  return (

    <div className="Navbar">
      
      <nav>

        <ul>

          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`link-item ${activeLink === link.href ? "active" : ""}`}
            >
              <Link href={link.href}>

                <span className={`link__text ${activeLink === link.href ? "active" : ""}`}>
                  {link.label}
                </span>
                
              </Link>
              <span className="link__underline"></span>
            </li>
          ))}

        </ul>

      </nav>

    </div>

  );
};

export default Navbar;
