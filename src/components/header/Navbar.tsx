import Link from 'next/link'
import React from 'react'
import styles from './header.module.css';

interface NavbarProbs {
  classAtribute?: string;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ classAtribute, setToggle }: NavbarProbs) {

  const funcToSetToggleOnClick = ():void => {
    if (setToggle) setToggle(false);
  }
  
  return (
    <div className={ classAtribute }>
    <Link onClick={ funcToSetToggleOnClick } className={ styles.navlink } href='/'>Home</Link>
    <Link onClick={ funcToSetToggleOnClick } className={ styles.navlink } href='/articles'>Articles</Link>
    <Link onClick={ funcToSetToggleOnClick } className={ styles.navlink } href='/about'>About</Link>
    <Link onClick={ funcToSetToggleOnClick } className={ styles.navlink } href='/admin-dashboard'>Admin Dashboard</Link>
  </div>
  )
}
