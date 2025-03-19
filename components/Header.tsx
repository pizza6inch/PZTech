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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import PizzaIcon from "@/public/pizza.svg";
import Image from "next/image";

import {} from "next/font/google";

const Header = () => {
  const { theme, setTheme } = useTheme();

  // TODO:: 將靜態資料存入json
  const navigationItems = [
    {
      label: "前端學習筆記",
      href: "/",
      content: [
        {
          label: "效能優化",
          href: "/",
        },
        {
          label: "資安防護",
          href: "/",
        },
      ],
    },
    {
      label: "職涯攻略",
      href: "/",
      content: [
        {
          label: "面試準備",
          href: "/",
        },
        {
          label: "市場調查",
          href: "/",
        },
      ],
    },
  ];

  return (
    <header className="flex items-center justify-between border-b-2  shadow-white shadow-2xs h-16 px-10">
      <div className="flex items-center cursor-pointer gap-2">
        <Image src={PizzaIcon} alt="" className="" width={30} height={30} />
        <h1 className="font-bold ">PIZZA筆記</h1>
      </div>
      <div className="flex justify-between items-center">
        {navigationItems.map((item) => (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <NavigationMenuTrigger className="cursor-pointer ">{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[100px] flex flex-col gap-2 left-3">
                    {item.content.map((contentItem) => (
                      <li key={contentItem.label} className="">
                        <NavigationMenuLink href={contentItem.href} className=" text-start">
                          {contentItem.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
        <Button variant="ghost" className="cursor-pointer">
          所有文章
        </Button>
        <Button variant="ghost" className="cursor-pointer">
          關於我
        </Button>
      </div>

      <Switch className="cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </header>
  );
};

export default Header;
