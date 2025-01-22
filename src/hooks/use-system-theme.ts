"use client";

import { useTheme } from "next-themes";

import { Dispatch, SetStateAction, useMemo } from "react";

type Theme = "light" | "dark";
type setTheme = Dispatch<SetStateAction<Theme>>;

export default function useSystemTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  return useMemo(
    () =>
      ({
        theme: theme === "system" ? systemTheme : theme,
        setTheme,
      }) as { theme: Theme; setTheme: setTheme },
    [theme, setTheme, systemTheme]
  );
}
