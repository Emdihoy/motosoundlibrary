import React from 'react';
import footerStyle from "../../../../public/styles/footer.module.scss";


export default function Footer () {
  return (
    <footer className={`${footerStyle} container`}>
      <p>&copy; {new Date().getFullYear()} motoSoundLibrary LLC. All rights reserved.</p>
    </footer>
  );
};