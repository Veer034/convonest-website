"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface IconProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  [key: string]: unknown;
}

export const ConvonestLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group">
        <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-pulse group-hover:border-blue-300/50 transition-all duration-300"></div>
        <span className="relative z-10 tracking-tight">CN</span>
      </div>
      <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-2xl font-bold text-transparent">
        Convonest
      </span>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "About", href: "#about-us" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);

    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      // If we're on home page, just scroll to section
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60"
      height="80px"
    >
      {/* Mobile View */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-slate-600 hover:text-blue-600 transition-colors mr-3"
        />
        <NavbarBrand>
          <button
            onClick={handleLogoClick}
            className="flex items-center transition-transform hover:scale-105"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group">
              <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-pulse group-hover:border-blue-300/50 transition-all duration-300"></div>
              <span className="relative z-10 tracking-tight">CN</span>
            </div>
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <button
            onClick={() => handleNavigation("#contact")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white px-4 py-2 rounded-full text-sm shadow-md transition-all duration-300"
          >
            Get Started
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop View */}
      <NavbarContent className="hidden sm:flex gap-6" justify="start">
        <NavbarBrand className="mr-4">
          <button
            onClick={handleLogoClick}
            className="flex items-center transition-transform hover:scale-105"
          >
            <ConvonestLogo />
          </button>
        </NavbarBrand>
        {menuItems.slice(0, -1).map((item) => (
          <NavbarItem key={item.name}>
            <button
              onClick={() => handleNavigation(item.href)}
              className="relative text-slate-700 font-medium transition-all duration-300 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Link
            href="/privacy"
            className="relative text-slate-700 font-medium transition-all duration-300 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Privacy
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="flex items-center">
          <Button
            onClick={() => handleNavigation("#contact")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
            radius="full"
            size="md"
          >
            Get Started
          </Button>
          <Button
            onClick={() =>
              (window.location.href = "https://dash.convonest.com/")
            }
            className="ml-4 bg-gradient-to-r from-green-500 to-teal-500 font-semibold text-white shadow-md transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-lg hover:-translate-y-0.5"
            radius="full"
            size="md"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md mt-2">
        <div className="flex flex-col space-y-1 pt-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <button
                className="flex w-full items-center rounded-lg px-4 py-3 text-left text-lg font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </button>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link
              href="/privacy"
              className="flex w-full items-center rounded-lg px-4 py-3 text-left text-lg font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
