"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "./ui/icons/homeIcon";
import HomeFillIcon from "./ui/icons/homeFillIcon";
import SearchIcon from "./ui/icons/searchIcon";
import SearchFillIcon from "./ui/icons/searchFillIcon";
import NewIcon from "./ui/icons/newIcon";
import NewFillIcon from "./ui/icons/newFillIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/colorButton";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text="Sign in" _onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
