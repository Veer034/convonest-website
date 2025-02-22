"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    redirect("/");
  }, []);

  return null; // This ensures no content flashes before redirecting
}
