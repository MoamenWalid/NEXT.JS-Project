'use client';

import React, { useState } from 'react';
import styles from "./header.module.css";
import Link from 'next/link';
import Navbar from './Navbar';
import { CiMenuFries } from "react-icons/ci";
import Sidebar from './Sidebar';

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  
  return (
    <header className={ `${ styles.header } py-[8px] px-[20px] md:px-[40px]` }>
      <div className='w-[40px] md:w-[50px]'>
        <img src="logo-pro.png" alt="logo" />
      </div>

      <Navbar classAtribute='hidden lg:flex flex-center gap-[30px]' />
      <Sidebar toggle={ toggle } setToggle={ setToggle } />

      <div className={ styles.auth }>
        <Link className={ styles.login } href='/login'>Login</Link>
        <Link className={ styles.register } href='/register'>Register</Link>
        <CiMenuFries onClick={ () => setToggle(prev => !prev) } className='ml-[10px] text-[#111] text-[20px] cursor-pointer block lg:hidden' />
      </div>

    </header>
  )
}