"use client"
import React from "react";
import Link from "next/link";
import "../styles/homepage.scss";
import { usePathname } from "next/navigation"; 
import Image from "next/image";
import { link } from "fs";

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

            <li key={link.label} className="relative" >

              <Link href={link.href}>
                
                <span className={`${
                    pathname === link.href ? "text-[#04D0EF] " : "text-white"
                    }`}>

                  {link.label}

                </span>
                
              </Link>

            </li>

          ))}

        </ul>

      </nav>

    </div>

  );
};
export default Navbar;