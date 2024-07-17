import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Application",
  description: "Generated by Job Application",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("theme");
  return (
    <html lang="en" className={theme?.value}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}