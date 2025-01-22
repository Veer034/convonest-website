import { renderHook } from "@testing-library/react";
import axios from "axios";

import { act } from "react";

import useGetUserData from "../src/hooks/useGetUserData";

jest.mock("axios");

describe("useGetUserData", () => {
  it("should return loading state initially", async () => {
    const { result } = renderHook(() => useGetUserData());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  });

  it("should fetch data successfully", async () => {
    const mockData = { name: "Luke Skywalker" };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const { result } = renderHook(() => useGetUserData());

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it("should handle fetch error", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() => useGetUserData());

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(errorMessage);
  });

  it("should handle axios error", async () => {
    const errorMessage = "Request failed with status code 404";
    (axios.get as jest.Mock).mockRejectedValueOnce({
      isAxiosError: true,
      message: errorMessage,
    });

    const { result } = renderHook(() => useGetUserData());

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    console.log(result.current);

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(errorMessage);
  });
});
