"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(
    () => typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );
  function gantiTema() {
    document.documentElement.classList.toggle("dark");
    setGelap(!gelap);
  }
  return (
    <Button
      type="button"
      onClick={gantiTema}
      variant="outline"
      className="border-white text-white hover:bg-white hover:text-utama dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
