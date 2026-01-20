import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import ModalLogin from "@/components/ModalLogin/ModalLogin";
import RegModal from "@/components/RegModal/RegModal";
import Cart from "@/components/Cart/Cart";
import ModalAddedProduct from "@/components/ModalAddedProduct/ModalAddedProduct";
import CallModal from "@/components/CallModal/CallModal";
import DeleteProductModal from "@/components/DeleteProductModal/DeleteProductModal";
import UpdateProductModal from "@/components/UpdateProductModal/UpdateProductModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Главная",
  description: "An online store with products of various categories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=1920, initial-scale=0.5, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <ModalLogin />
          <RegModal />
          <Cart />
          <ModalAddedProduct />
          <CallModal />
          <DeleteProductModal />
          <UpdateProductModal />
          {children}
        </Providers>
      </body>
    </html>
  );
}
