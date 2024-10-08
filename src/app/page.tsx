'use client';

import React from "react";
// import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import homeStyle from "../../public/styles/home.module.scss";
import logo from "/public/img/motoslSmall.png";
import Footer from "./components/footer/page";
import Header from "./components/header/page";



export default function Home() {
  return (
    <>
      <Header />

      <Head>
        <title>Moto Sound Library</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"/>
        <title>Moto Sound</title>
      </Head>

      <div className={homeStyle.body}>

        <main className={`${homeStyle.main} container`}>
          <Image
            className={homeStyle.logo}
            src={logo}
            alt="logo"
            priority
          />


          <div>
            
          </div>

        </main>

      </div>
      <Footer />
    </>
  );
}
