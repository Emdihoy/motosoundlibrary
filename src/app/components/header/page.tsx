import React from 'react';
import headerStyle from "../../../../public/styles/header.module.scss";

export default function Header () {
    return (
      <footer className={`${headerStyle} container`}>
        <p>&copy; {new Date().getFullYear()} motoSoundLibrary LLC. All rights reserved.</p>
      </footer>
    );
  };