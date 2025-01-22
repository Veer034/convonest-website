"use client";

import { Switch } from "@nextui-org/react";
import { Moon02Icon, Sun02Icon } from "hugeicons-react";

import { useCallback, useEffect, useState } from "react";

import useSystemTheme from "../hooks/use-system-theme";

export function ThemeSwitcher({ showLabel = false }: { showLabel?: boolean }) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme } = useSystemTheme();

  const handleThemeChange = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <Switch
        isSelected={theme === "light"}
        onValueChange={handleThemeChange}
        size="lg"
        color="success"
        startContent={<Sun02Icon />}
        endContent={<Moon02Icon />}
        aria-label="Toggle dark mode"
      >
        {showLabel && "Theme"}
      </Switch>
    </div>
  );
}
