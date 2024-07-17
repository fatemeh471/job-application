"use client";
import Image from "next/image";
import { FC, useState } from "react";
import Moon from "../assets/images/moon.png";
import Sun from "../assets/images/sun.png";
type Theme = "dark" | "light";
type Props = {
  theme: Theme;
};

export const ThemeSwitcher: FC<Props> = ({ theme }) => {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setTheme("dark");
      document.cookie = `theme=${"dark"}`;
    } else {
      setTheme("light");
      document.cookie = `theme=${"light"}`;
    }
  };

  return (
    <button onClick={toogleTheme} className="p-1">
      {_theme == "dark" ? (
        <Image src={Moon} width={50} alt="Moon" />
      ) : (
        <Image src={Sun} height={50} alt="Moon" />
      )}
    </button>
  );
};
