"use client";

import Link from "next/link";
import cl from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { BurgerButton } from "./BurgerButton";

export const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    if (burgerMenu) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "";

    return () => document.body.style.overflow = "";
  }, [burgerMenu]);

  return (
    <header className={`space-around ${cl.navbar}`}>
      <BurgerButton active={burgerMenu} setActive={setBurgerMenu}/>
      <img src="/logo/logo.jpg" className={cl.logo} />
      <div className={`center ${cl.links} ${burgerMenu ? cl.show : ""}`}>
        <Link className={cl.link} href={"/"}>Home</Link>
        <Link className={cl.link} href={"/"}>About Us</Link>
        <Link className={cl.link} href={"/"}>Directly</Link>
        <Link className={cl.link} href={"/"}>Info</Link>
      </div>
      <img src="/logo/logo.jpg" className={cl.logo} />
    </header>
  );
};