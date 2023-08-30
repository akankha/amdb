import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-200 lg:text-lg p-4">
      <NavbarItem title={"Tranding"} param="fetchtranding"></NavbarItem>
      <NavbarItem title={"Top"} param="fetchtop"></NavbarItem>
    </div>
  );
};

export default Navbar;
