"use client"
import Link from 'next/link'
import React from 'react'

const Menuitem = ({title, address, Icon }) => {
  return (
    <>
      <Link
        href={address}
        className="mx-4 flex items-center lg:mx-6 text-white font-semibold hover:text-amber-500"
      >
        <Icon className="text-lg text-amber-400 " />

        <span
          className= "dark:text-black  text-white my-2 ps-2 text-sm"
          
        >
          {title}
        </span>
      </Link>
    </>
  );
}

export default Menuitem