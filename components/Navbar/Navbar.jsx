import Link from 'next/link'
import React from 'react'
import styles from'./Navbar.module.css'

export default function Navbar({children}) {
  return (
    <>
    <div className={styles.nav}>
  <input type="checkbox" id="navcheck"/>
  <div className={styles.navheader}>
    <div className={styles.navtitle}>
    Cheikh gueye navbar      
    </div>
  </div>
  <div className={styles.navbtn}>
    <label htmlFor="navcheck">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className={styles.navlinks}>
    <Link href="/">
        <a >Home</a>
    </Link>
    <Link href="/contact">
        <a >Contact</a>
    </Link>
    <Link href="/about">
        <a >About</a>
    </Link>
    <Link href="/bloc">
        <a >Quotes(ISR)</a>
    </Link>
    <Link href="/galerie">
        <a >Galerie</a>
    </Link>
    <Link href="/listes">
        <a >Listes(ISR)</a>
    </Link>
    <Link href="/bitcoins">
        <a >Bitcoin (SSR)</a>
    </Link>
  </div>
</div>
{children}
    </>
  )
}
