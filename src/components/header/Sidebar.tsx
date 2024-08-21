'use client';

import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Navbar from './Navbar';

interface SidebarProbs {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ toggle, setToggle }: SidebarProbs) {
  const [state, setstate] = useState<string[]>([]);
  const closedSidebar:string = 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)';
  const opendSidebar:string = 'polygon(100% 0, 0 0, 0 100%, 100% 100%)';
  return (
    <div style={{ clipPath: toggle ? opendSidebar : closedSidebar }} className="sidebar duration-300 p-[20px_45px] fixed top-0 right-0 bg-[#ffff] w-screen sm:w-[350px] md:w-[400px] h-[100vh]">
      <IoCloseOutline onClick={() => setToggle(false) } className='text-[#E91E63] absolute top-[30px] right-[30px] text-[30px] cursor-pointer' />
      <Navbar setToggle={ setToggle } classAtribute='flex flex-col mt-[55px] text-[30px] gap-[20px]' />
    </div>
  )
}