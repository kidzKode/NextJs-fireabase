"use client";
import {Inter} from  "next/font/google"
import "./globals.css";
import Header from "@/app/Components/Header";
import { AuthContextProvider}  from "./context/AuthContext";


const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children})
 {
  return (
    <html lang="en">
      <body className="{inter.className}">
      <AuthContextProvider>
               <Header/>
               {children}
          </AuthContextProvider>
        </body>
    </html>
  );
}
