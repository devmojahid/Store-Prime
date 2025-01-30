import { Geist } from "next/font/google";
import "./globals.css";
import "../style/index.scss";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: {
    default: "Store Prime - Complete E-Commerce Solution",
    template: "%s | Store Prime"
  },
  description: "Next-generation E-Commerce Solution for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
