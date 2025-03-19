"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex items-center border-b-2  shadow-white shadow-2xs">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-red-500">
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-red-500">
              <NavigationMenuLink>pop</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Switch className=" cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </header>
  );
};

export default Header;
