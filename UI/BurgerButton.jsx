"use client";

import { useState } from "react";
import cl from "./BurgerButton.module.css";

export const BurgerButton = ({ active, setActive }) => {

  return (
    <div
      onClick={() => setActive(active ? false : true)}
      className={`${cl.burger} ${active && cl.active}`}>
      <span className={`${cl.line} ${cl.line1}`}/>
      <span className={`${cl.line} ${cl.line2}`}/>
      <span className={`${cl.line} ${cl.line3}`}/>
    </div>
  );
};