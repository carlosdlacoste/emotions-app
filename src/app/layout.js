"use client"
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { useState } from "react";
import Home from "./page";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [token, setToken] = useState(null);

  const handleTokenChange = newToken => {
    setToken(newToken);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if(child.type === Home)return React.cloneElement(child, { token, handleTokenChange });
    return child
  });



  return (
    <html lang="en" style={{backgroundColor: "white"}}>
      <body className={inter.className}>
        <NavBar storedToken={token} handleToken={handleTokenChange}/>
        {childrenWithProps}
      </body>
    </html>
  );
}
