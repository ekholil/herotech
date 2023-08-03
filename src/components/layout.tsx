import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
