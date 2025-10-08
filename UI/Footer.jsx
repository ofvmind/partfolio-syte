import cl from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`space-around ${cl.footer}`}>
      <div className={`center-column ${cl.flags}`}>
        <img src="/images/flag.jpg" className={cl.flag}/>
        <p>American Flag</p>
        <img src="/images/arms.jfif" className={cl.arms}/>
        <p>American Cout Of Arms</p>
      </div>
      <div className={cl.description}>
        <p>USA</p>
      </div>
    </footer>
  );
};