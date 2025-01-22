import useSystemTheme from "@/hooks/use-system-theme";
import { renderHook } from "@testing-library/react";
import { useTheme } from "next-themes";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("useSystemTheme", () => {
  it("should return system theme when theme is system", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "system",
      setTheme: jest.fn(),
      systemTheme: "dark",
    });

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.setTheme).toBeDefined();
  });

  it("should return light theme when theme is light", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
      systemTheme: "dark",
    });

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.setTheme).toBeDefined();
  });

  it("should return dark theme when theme is dark", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: jest.fn(),
      systemTheme: "light",
    });

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.setTheme).toBeDefined();
  });
});
