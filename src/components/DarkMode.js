"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMount(true), []);
  return (
    <>
      {mount && currentTheme === "dark" ? (
        <BsFillMoonStarsFill
          onClick={() => setTheme("light")}
          className="text-md text-black cursor-pointer my-2 hover:text-amber-500"
        />
      ) : (
        <BsSunFill
          onClick={() => setTheme("dark")}
          className="text-md text-white cursor-pointer my-2 hover:text-amber-500"
        />
      )}
    </>
  );
};

export default DarkMode;
