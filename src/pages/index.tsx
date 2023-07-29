import Banner from "@/components/Banner";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Banner />
    </main>
  );
}
