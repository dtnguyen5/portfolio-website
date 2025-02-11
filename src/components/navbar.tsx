"use client"
import React from "react";
import Link from "next/link";
import "../styles/homepage.scss";
import { usePathname } from "next/navigation"; 
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

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
                className={`link-item ${pathname === link.href ? "active" : ""}`}
              >
                
                <Link href={link.href}>

                  <span className={`link__text ${pathname === link.href ? "active" : ""}`}>
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