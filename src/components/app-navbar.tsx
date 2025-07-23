"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import React from "react";

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
      {/* Circle Nest CN Logo */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group">
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-pulse group-hover:border-blue-300/50 transition-all duration-300"></div>
        <span className="relative z-10 tracking-tight">CN</span>
      </div>
      <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-2xl font-bold text-transparent">
        Convonest
      </span>
    </div>
  );
};

export const ChevronDown = ({
  fill,
  size,
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Updated menu items to include pricing
  const menuItems = [
    { name: "About", href: "#about-us" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60"
      height="80px"
    >
      {/* Mobile View - Menu Toggle, Logo, and Get Started Button */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-slate-600 hover:text-blue-600 transition-colors mr-3"
        />
        <NavbarBrand>
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center transition-transform hover:scale-105"
          >
            {/* Mobile - Only show the circle logo without company name */}
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white px-4 py-2 rounded-full text-sm shadow-md transition-all duration-300"
          >
            Get Started
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop View - Full Navigation */}
      <NavbarContent className="hidden sm:flex gap-6" justify="start">
        <NavbarBrand className="mr-4">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center transition-transform hover:scale-105"
          >
            <ConvonestLogo />
          </button>
        </NavbarBrand>
        {menuItems.slice(0, -1).map((item) => (
          <NavbarItem key={item.name}>
            <button
              onClick={() => scrollToSection(item.href)}
              className="relative text-slate-700 font-medium transition-all duration-300 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6"
        justify="center"
      ></NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
            radius="full"
            size="md"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Dropdown */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md mt-2">
        <div className="flex flex-col space-y-1 pt-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <button
                className="flex w-full items-center rounded-lg px-4 py-3 text-left text-lg font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
