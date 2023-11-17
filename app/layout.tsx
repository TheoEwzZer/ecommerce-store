import { ReactElement } from "react";

import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import ModalProvider from "@/providers/modal-provider";

import "./globals.css";

const font: NextFont = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
