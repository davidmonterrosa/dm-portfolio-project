"use client";
import Image from "next/image";
import icon from "../app/icon.jpeg";
import { Source_Sans_3 } from "next/font/google";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener(); // set initial state
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

const NavBarComponent = () => {
  const [open, setOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <nav className="rounded-full fixed top-0 xl:left-[calc((100%-80rem)/2)] z-50 w-full max-w-7xl bg-black/25 dark:bg-white/25 backdrop-blur-sm  flex justify-between mt-2 px-8 py-1 ">
        <a href="#top">
          <Image
            src={icon}
            alt="Rose with Mountain Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </a>
        <NavigationMenu className={`${sourceSans3.className}`}>
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className="text-xl">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className="text-xl">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#skills" className="text-xl">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    );
  }

  return (
    <nav className="rounded-full fixed top-0 xl:left-[calc((100%-80rem)/2)] z-50 w-full max-w-7xl bg-black/25 dark:bg-white/25 backdrop-blur-sm  flex justify-between mt-2 px-8 py-1 ">
      <Image
        src={icon}
        alt="Rose with Mountain Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <DropdownMenu modal={true} open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          {/* <MenuIcon aria-label="Open menu" isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} /> */}
          <div
            className="relative bg-[00000000] w-[60px] h-[40px] cursor-pointer transition-transform duration-500"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 h-[9px] w-full dark:bg-black bg-white rounded-full transition-all duration-300 origin-left ${open ? "rotate-45 top-[-3px] left-[8px]" : "rotate-0 top-0 left-0"}`}
            />

            {/* Line 2 */}
            <span
              className={`absolute left-0 h-[9px] w-full dark:bg-black bg-white rounded-full transition-all duration-300 origin-left ${open ? "opacity-0 w-0 top-[18px]" : "opacity-100 w-full top-[18px]"}`}
            />

            {/* Line 3 */}
            <span
              className={`absolute left-0 h-[9px] w-full dark:bg-black bg-white rounded-full transition-all duration-300 origin-left ${open ? "rotate-[-45deg] top-[39px] left-[8px]" : "rotate-0 top-[36px] left-0"}`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-full space-y-4 py-6 px-4 text-lg">
          <DropdownMenuLabel className="text-xl font-bold">
            Menu
            <DropdownMenuSeparator />
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <a href="#about" onClick={() => setOpen(false)} className="block">
              About
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#projects" onClick={() => setOpen(false)} className="block">
              Projects
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#skills" onClick={() => setOpen(false)} className="block">
              Skills
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center">
            <ThemeToggle />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBarComponent;
