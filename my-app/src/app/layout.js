import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HamburgerMenu from '../components/HamburgerMenu'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Go Brand - an Ethical Brand Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HamburgerMenu />
        {children}
      </body>
    </html>
  );
}
