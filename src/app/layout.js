import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { AuthProvider } from "@/context/appContext";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  return (
    <html lang="en" style={{backgroundColor: "white"}}>
      <body className={inter.className}>
        <AuthProvider>
          <NavBar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
