"use client"
import React from 'react'
import Menuitem from './Menuitem'
import {BiSolidHomeSmile,BiSolidCameraMovie,BiSolidMovie} from "react-icons/bi"
import Link from 'next/link'
import DarkMode from './DarkMode'
import Provider from '@/app/Providers'




const Header = () => {



  return (
    <>
      <div className="dark:bg-white bg-gray-800">
        <div
          className="flex justify-between mx-2 max-w-6xl sm:mx-auto
   items-center py-6"
        >
          <div>
            <Link href="/">
              <h2 className="text-2xl px-2">
                <span className="font-bold bg-amber-400 rounded px-2 py-1 font-sans text-black">
                  AMDb
                </span>
              </h2>
            </Link>
          </div>

          <div className="flex">
            <Menuitem title={"Home"} address={"/"} Icon={BiSolidHomeSmile} />
            <Menuitem
              title={"Movies"}
              address={"/Movies"}
              Icon={BiSolidCameraMovie}
            />
            <Menuitem
              title={"Tv-Shows"}
              address={"/TvShows"}
              Icon={BiSolidMovie}
            />
            <DarkMode />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header