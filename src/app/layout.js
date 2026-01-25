import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "variable" });

export const metadata = {
  title: "Assignment Blog",
  description:
    "Next.js Blog App focussing on the different assignments completed with Tech Educators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
